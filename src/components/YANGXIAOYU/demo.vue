<template>
	<div>
		<!--顶部-->
		<mt-header title="商品">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<!--轮播图-->
		<!--商品信息-->
		<v-shopinfo></v-shopinfo>
		<!--商品规格及配送-->
		<!--商品评价-->
		<!--店铺信息组件-->
		<!--为你推荐商品或排行榜-->
	</div>
</template>
<script type="text/javascript">
	import ShopInfo from './children/ShopInfo'
	export default{
		components: {
		    'v-shopinfo': ShopInfo,
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
<style >
</style>
