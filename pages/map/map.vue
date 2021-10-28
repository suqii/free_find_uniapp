<template>
	<view>
		<map style="width: 100vw; height: 100vh;" :latitude="latitude" :longitude="longitude" :markers="markers" :polyline="polyline">
		</map>
	</view>
</template>

<script>
	import Amap from '@/common/map/lyn4ever-gaode.js';
	export default {
		data() {
			return {
				longitude: 103.888925,
				latitude: 30.484929,
				markers: [],
				polyline: []
			}
		},
		onLoad(options) {
			// console.log(options.longitude)
			// console.log(options.latitude)
			// console.log(options)
			let that = this;
			var startPoi = "103.888925,30.484929";
			var wayPoi =
				"";
			// var endPoi = 104.097929+','+30.641892;
			var endPoi = options.longitude+','+options.latitude;
			// console.log(endPoi)
			// var endPoi = "104.097929,30.641892";
			
			Amap.line(startPoi, endPoi, wayPoi,function(res){
				that.polyline.push(res)
			});
		
			Amap.markers(startPoi,endPoi,wayPoi,function(res){
				that.markers.push.apply(that.markers,res)
			})
		},
		methods: {

		}
	}
</script>

<style>

</style>
