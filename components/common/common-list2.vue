<template>
	<view class="p-2 animated fast fadeIn ">
		<!-- 头像昵称 | 关注按钮 -->
		<view class="con">
			
			<!-- 标题 -->
			<!-- <view class="font-md my-1" @click="openDetail">{{item.title}}</view> -->
			<!-- 帖子详情 -->
			<slot>
				<!-- 图片 -->
				<image v-if="item.titlepic" :src="item.titlepic" @click="openDetail" 
				style="height: 350rpx; border-radius: 30rpx 30rpx 0 0;margin-bottom: -10rpx;" class="rounded w-100" mode="aspectFill"></image>
			</slot>
			<view class="flex align-center justify-between pl-2 pt-1">
				<view class="flex align-center">
					<!-- 头像 -->
					<image class="rounded-circle mr-2" 
					:src="item.userpic" @click="openSpace(item.user_id)"
					style="width: 75rpx;height: 75rpx;" 
					lazy-load></image>
					<!-- 昵称发布时间 -->
					<view>
						<view class="font" style="line-height: 1.5;">
							{{item.username}}
						</view>
						<text class="font-sm text-light-muted" 
						style="line-height: 1.5;">
							{{item.newstime|formatTime}}
						</text>
					</view>
				</view>
				<!-- 按钮 -->
				<!-- <view @click="follow" 
				v-if="!item.isFollow && user.id !== item.user_id"
				class="flex align-center justify-center rounded bg-main text-white animated faster" 
				style="width: 90rpx;height: 50rpx;"
				hover-class="jello"
				>
					关注
				</view> -->
			</view>
			<!-- 标题 -->
			<view class="font-md   pl-3" @click="openDetail">{{item.title}}</view>
			<!-- 图标按钮 -->
			<view class="flex align-center">
				<!-- 顶 -->
				<view class="flex align-center justify-center flex-1 animated faster"
				hover-class="jello text-main" @click="doSupport('support')"
				:class="item.support.type === 'support' ? 'support-active' : ''">
					<text class="iconfont icon-dianzan2 mr-2"></text>
					<text>{{item.support.support_count > 0 ? item.support.support_count : '支持'}}</text>
				</view>
				<!-- 踩 -->
				<view class="flex align-center justify-center flex-1 animated faster"
				hover-class="jello text-main" @click="doSupport('unsupport')"
				:class="item.support.type === 'unsupport' ? 'support-active' : ''">
					<text class="iconfont icon-cai mr-2"></text>
					<text>{{item.support.unsupport_count > 0 ? item.support.unsupport_count : '反对'}}</text>
				</view>
				<view class="flex align-center justify-center flex-1 animated faster"
				hover-class="jello text-main" @click="doComment">
					<text class="iconfont icon-pinglun2 mr-2"></text>
					<text>{{item.comment_count > 0 ? item.comment_count : '评论'}}</text>
				</view>
				<view class="flex align-center justify-center flex-1 animated faster"
				hover-class="jello text-main" @click="doShare">
					<text class="iconfont icon-fenxiang mr-2"></text>
					<text>{{item.share_num > 0 ? item.share_num : '分享'}}</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import $T from '@/common/time.js';
	import {mapState} from 'vuex';
	export default {
		props: {
			item: Object,
			index:{
				type:Number,
				default:-1
			},
			isdetail:{
				type:Boolean,
				default:false
			}
		},
		filters: {
			formatTime(value) {
				return $T.gettime(value);
			}
		},
		computed: {
			...mapState({
				user:state=>state.user
			})
		},
		methods: {
			// 打开个人空间
			openSpace(user_id) {
				uni.navigateTo({
					url: '/pages/user-space/user-space?user_id='+user_id,
				});
			},
			// 关注
			follow(){
				this.checkAuth(()=>{
					this.$H.post('/follow',{
						follow_id:this.item.user_id
					},{
						token:true
					}).then(res=>{
						// 通知更新
						uni.$emit('updateFollowOrSupport',{
							type:"follow",
							data:{
								user_id:this.item.user_id
							}
						})
					})
				})
			},
			// 进入详情页
			openDetail(){
				// 处于详情中
				if (this.isdetail) return;
				uni.navigateTo({
					url: '../../pages/detail/detail?detail='+JSON.stringify(this.item),
				});
				// 加入历史记录
				let list =  uni.getStorageSync('history')
				list = list ? JSON.parse(list) : []
				let index = list.findIndex(v=>v.id === this.item.id)
				if(index === -1){
					list.unshift(this.item)
					uni.setStorageSync('history',JSON.stringify(list))
				}
			},
			// 顶踩操作
			doSupport(type){
				this.checkAuth(()=>{
					this.$H.post('/support',{
						post_id:this.item.id,
						type:type === 'support' ? 0 : 1
					},{
						token:true,
						native:true
					}).then(res=>{
						if(res.data.errorCode){
							return uni.showToast({
								title:res.data.msg,
								icon: 'none'
							});
						}
						console.log('通知父组件');
						// 通知父组件
						uni.$emit('updateFollowOrSupport',{
							type:"support",
							data:{
								type:type,
								id:this.item.id
							}
						})
					})
				})
			},
			// 评论
			doComment(){
				this.checkAuth(()=>{
					if (!this.isdetail) {
						return this.openDetail()
					}
					this.$emit('doComment')
				})
			},
			// 分享
			doShare(){
				if (!this.isdetail) {
					return this.openDetail()
				}
				this.$emit('doShare')
			}
		},
	}
</script>

<style>
	.support-active{
		color: #FF4A6A;
	}
	.con{
		border-radius: 30rpx;
		/* background-color: red; */
		padding-bottom: 14rpx;
		box-shadow:  00px 0px 40px #888888;
		             /* -0px -0px 80px #ffffff; */
	}
</style>
