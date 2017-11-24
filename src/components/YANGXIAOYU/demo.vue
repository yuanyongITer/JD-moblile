<template>
	<div class='shopdetail'>
		<!--顶部-->
		<mt-header title="商品">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="shopcontent">
			<!--轮播图-->
			<!--商品信息-->
			<GoodsInfo></GoodsInfo>
			<GoodsDelivery></GoodsDelivery>
			<!--商品规格及配送-->
			
			<!--商品评价-->
			<GoodsRating></GoodsRating>
			<!--店铺信息组件-->
			<!--为你推荐商品或排行榜-->
		</div>
	</div>
</template>
<script type="text/javascript">
	import GoodsInfo from './children/GoodsInfo'
	import GoodsDelivery from './children/GoodsDelivery'
	import GoodsRating from './children/GoodsRating'
	export default{
		components: {
			GoodsInfo,
			GoodsDelivery,
			GoodsRating
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
	.shopdetail{
		width: 100%;
		.shopcontent{
			width: 96%;
			margin: auto;
		}
	}
</style>
