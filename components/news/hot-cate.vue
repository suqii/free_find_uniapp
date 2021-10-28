<template>
	<view>
		<view class="flex align-center justify-between px-2">
			<text class="font-md">热门分类</text>
			<view class="flex align-center font text-secondary animated" hover-class="jello" @click="openMore">
				更多 <text class="iconfont icon-jinru"></text>
			</view>
		</view>
		<!-- <view class="flex align-center py-3 px-2 border-bottom">
			<view class="border rounded bg-light mx-1 px-2 animated"
			hover-class="jello" v-for="(item,index) in hotCate"
			:key="index" @click="openMore">
				{{item.name}}
			</view>
		</view> -->
		<view>
		    <scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
		        <view id="demo1" v-for="(item,index) in hotCate"
			:key="index" @click="openMore" class="scroll-view-item_H " :style="{'background-image':'url('+item.topicpic+')'}" style="background-size:100% 100%;">
				<!-- style="{'background-image':'url('+item.topicpic+');background-size:100% 100%;'}" -->
					<view class="title">
						{{item.name}}
					</view>
					<!-- 导航部分 -->
					<view class="iconfont icon-fabu1 pos" style="color: white;" @click.native.stop="openMap(item.longitude,item.latitude)">
					</view>
				</view>
		 
		    </scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['hotCate'],
		methods: {
			openMore() {
				uni.navigateTo({
					url: '../../pages/topic-nav/topic-nav',
				});
			},
			// 打开地图
			openMap(longitude,latitude) {
				// console.log("打开地图,经纬度为"+'('+longitude+','+latitude+')')
				
				 uni.navigateTo({
				   url:'/pages/map/map?longitude=' + longitude+'&latitude=' + latitude,
				  })
			},
		},
	}
</script>

<style>
	.scroll-view_H {
	  white-space: nowrap;
	  width: 100%;
	  height: 180rpx;
	  /* border: 1px red solid; */
	}
	scroll-view ::-webkit-scrollbar {
	  display: none;
	  width: 0;
	  height: 0;
	  background-color: transparent;
	}
	
	.scroll-view-item_H {
	  display: inline-block;
	  position: relative;
	  width: 330rpx;
	  height: 180rpx;
	  margin-left: 30rpx;
	  line-height: 180rpx;
	  text-align: center;
	  font-size: 36rpx;
	  border-radius: 30rpx;
	}
	.title{
		position: absolute;
		bottom: 10rpx;
		left: 20rpx;
		font-size: large;
		color: white;
	}
	.pos{
		position: absolute;
		top: 10rpx;
		right: 20rpx;
		font-size: large;
		color: white;
	}
</style>
