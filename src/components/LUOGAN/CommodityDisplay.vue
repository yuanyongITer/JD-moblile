<template>
	<div class="div_Color">
		<div v-if="isDouble" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
			<div class="div_DoubleLeft">
				<img src="../../assets/Lg_img/iphone8.jpg" class="img_Double">
				<div>
					<span>￥6688</span>
				</div>
			</div>
		</div>
		<div v-else>
			<div class="div_Single">
				<img src="../../assets/Lg_img/iphone8.jpg" class="img_Single">
			</div>
			<p class="p_Size">Apple iPhone 8 Plus(A1864) 64GB 金色 移动联通电信4G手机 两周超长待机 开辟手机新时代</p>
			<p>￥6688</p>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				isDouble:false,
				loading:false,
			}
		},
		methods:{
		},
	}
</script>
<style type="text/css" scoped>
	.div_Color{
		/*background-color: #fafafa;*/
	}
	.div_DoubleLeft{
		width: 48%;
		height: 200px;
		float: left;
		display: inline;
		margin-top:1px;
		margin-right:2px; 
	}
	.div_DoubleRight{
		width: 49%;
		height: 200px;
		float: right;
		display: inline;
		margin-top:1px;
	}
	.img_Double{
		width: 100%;
	}
	.img_Single{
		width: 100%;
	}
	.div_Single{
		width: 28%;
		float: left;
		display: inline;
	}
	.p_Size{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:2;
		/*text-overflow:ellipsis;*/
		overflow: hidden;
	}
</style>