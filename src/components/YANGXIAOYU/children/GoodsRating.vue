<!--
组件名：商品评价
功能点：对于用户是否上传图片的不同展示方式,省略显示
-->
<template>
	<div id="div_GoodsRating">
		<div class="div_class_RatingLink">
			<div class="div_class_Rowhead">
				评价数(2334)
			</div>
			<div>好评度&nbsp;&nbsp;
				<span class="all_class_Hightlight_Red">97%</span>
				<i class="iconfont icon-arrow-right"></i>
			</div>
		</div>
		<div class="div_class_ratingContent" v-for="item in num" :key="item">
			<div class="div_class_Grid">
				<div class="div_class_GridCol_Col6">
					<img src="../../../../static/info_all_peisong.jpg" class="userImg">
				</div>
				<div class="div_class_GridCol_Colcenter">
					<p class="p_class_userInfo">
						<span>令*****龙 <mt-badge size="small" color="#888">PLUS</mt-badge></span>
						<span>
							<i class="iconfont icon-star1 all_class_Hightlight_Red"></i>
							<i class="iconfont icon-star1 all_class_Hightlight_Red"></i>
							<i class="iconfont icon-star1 all_class_Hightlight_Red"></i>
							<i class="iconfont icon-star1 all_class_Hightlight_Red"></i>
							<i class="iconfont icon-star1 all_class_Hightlight_Red"></i>
						</span>
					</p>
				</div>
			</div>
			<div class="div_class_Grid">
				<div class="div_class_GridCol_Col100">
					<p class="p_class_Intro">物流速度很快，一大早就收到了，试用了一下午，说说感觉吧，我是把我的5S换了，5用了3年了，手机很流畅就是电池待机不行，一天充好几回。关注8很久了，由于价格太高一直没下手，刚好前几天华为美十也上了，去看过，确实不错，有想入手的冲动，可是这两天关注8的时候看到京东优惠蛮大的，就果断入手了。</p>
					<div class="div_class_ActualPicture">
						<img src="../../../../static/info_all_good.jpg" class="imgItem">
						<img src="../../../../static/info_all_good.jpg" class="imgItem">
						<img src="../../../../static/info_all_good.jpg" class="imgItem">
						<img src="../../../../static/info_all_good.jpg" class="imgItem">
					</div>
				</div>
			</div>
			<p class="p_class_goodsSize">金色 , 64GB</p>
		</div>
		<div class="div_class_ratingBtn">
			<div class="btnItem">查看全部评价
			</div>
			<div class="btnItem">购买咨询</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'div_GoodsRating',
		data(){
			return {
				num:3
			}
		},
		created(){

		},
		methods:{

		}
	}
</script>
<style scoped>
	#div_GoodsRating{
		font-size: 0.8rem;
	}
	.div_class_RatingLink{
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 0.3rem;
	}
    /**顶部的样式**/
    .div_class_ratingBtn{
    	display: flex;
		justify-content: space-between;
		padding: 0.8rem 0 0.7rem;
		border-bottom: 1px solid #F1F1F1;
    }
    .btnItem{
    	width: 45%;
    	text-align: center;
    	color: #A2A2A2;
    	border: 1px solid #F0F0F0;
    	border-radius:5px;
    	padding: 0.4rem 0;
    	font-size: 0.8rem;
    }
    /**评价详情样式**/
    .div_class_ratingContent{
    	border-top: 1px solid #F1F1F1;
    	padding: 5px 2px;
    }
	.userImg{
		width: 2rem;
		height: 2rem;
		border-radius:50%;
		overflow:hidden;
	}
	.p_class_Intro{
        font-size: 0.6rem - 0.2rem ;
        overflow: hidden;
        text-overflow: -o-ellipsis-lastline;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-bottom: 0.5rem;
    }
	.p_class_userInfo{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.div_class_ActualPicture{
		display: flex;
	    align-items: flex-start;
	    flex-wrap: wrap;
	    justify-content: space-between; 
	}
	.imgItem{
		width: 23%;
	}

	.p_class_goodsSize{
		margin: 0.4rem 0rem 0.2rem;
		color: #c1c1c1;
		font-size: 0.8rem;
	}
</style>