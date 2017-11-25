<template>
	<div class='div_class_ShopDetail'>
		<!--顶部-->
		<mt-header title="商品">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="div_class_ShopContent">
			<!--轮播图-->
			<PictureRotation></PictureRotation>
			<!--商品信息-->
			<GoodsInfo></GoodsInfo>
			<!--商品规格及配送-->
			<GoodsDelivery></GoodsDelivery>
			<!--商品评价-->
			<GoodsRating></GoodsRating>
			<!--店铺信息组件-->
			<ShopInfo></ShopInfo>
			<!--为你推荐商品或排行榜-->
			<GoodsRank></GoodsRank>
		</div>
	</div>
</template>
<script type="text/javascript">
	import GoodsInfo from './children/GoodsInfo'
	import GoodsDelivery from './children/GoodsDelivery'
	import GoodsRating from './children/GoodsRating'
	import ShopInfo from './children/ShopInfo'
	import GoodsRank from './children/GoodsRank'
	import PictureRotation from '../WUSICONG/PictureRotation'
	export default{
		components: {
			GoodsInfo,
			GoodsDelivery,
			GoodsRating,
			ShopInfo,
			GoodsRank,
			PictureRotation
	    },
		data(){
			return {
				
			}
		},
		mounted(){
			
		},
		methods:{
			
		},
	}
</script>
<style lang='scss'>
	.div_class_ShopDetail{
		width: 100%;
		.div_class_ShopContent{
			width: 96%;
			margin: auto;
		}
	}
</style>
