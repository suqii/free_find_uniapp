<template>
	<view class=" card-box" @click="open">
		<image :src="item.cover" mode = "aspectFill	"
		style="width: 100%;height: 360rpx; border-radius: 25rpx;"
		class="rounded mr-2"></image>
		<view class="flex flex-column flex-1 card-txt">
			<text class="font-md text-light">#{{item.title}}#</text>
			<text class="font text-secondary text-light">{{item.desc}}</text>
			<view class="flex align-center text-light font text-secondary">
				<text class="mr-2">动态：{{item.news_count}}</text>
				<text>今日：{{item.today_count}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item:Object,
			index:Number,
			choose:{
				type:Boolean,
				default:false
			}
		},
		methods: {
			open() {
				if(this.choose){
					uni.$emit('chooseTopic',{
						id:this.item.id,
						title:this.item.title
					})
					return uni.navigateBack({
						delta: 1
					});
				}
				uni.navigateTo({
					url: '../../pages/topic-detail/topic-detail?detail='+JSON.stringify(this.item),
				});
			}
		},
	}
</script>

<style>
.card-box{
  /* background: red; */
  margin-bottom:20rpx ;
  position: relative;
 padding: 0 25rpx;
}
.card-txt{
  
  z-index: 99;
  position: absolute;
  bottom: 30rpx;
  left: 40rpx;
}
</style>
