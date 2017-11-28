<!--
组件名：商品评价
功能点：对于用户是否上传图片的不同展示方式,省略显示
-->
<template>
	<div id="div_GoodsRating">
		<div class="div_class_RatingLink">
			<p>评价数(2334)</p>
			<div>
				好评度&nbsp;&nbsp;
				<span>97%</span>
				<i class="iconfont icon-arrow-right"  @click="ToMoreRating()"></i>
			</div>
		</div>
		<div class="div_class_ratingContent" v-for="item in 3" :key="item" @click="ToMoreRating()">
			<div class="all_class_Border1px"></div>
			<div class="div_class_Grid">
				<div class="div_class_GridCol_Col6">
					<img src="../../../../static/info_all_peisong.jpg" class="userImg">
				</div>
				<div class="div_class_GridCol_Colcenter">
					<p class="p_class_userInfo">
						<span class="span_class_userName">令*****龙 <mt-badge size="small" color="#888">PLUS</mt-badge></span>
						<span class="span_class_star">
							<span v-for="(star,index) in 5">★</span>
						</span>
					</p>
				</div>
			</div>

			<div class="div_class_Grid">
				<div class="div_class_GridCol_Col100">
					<p class="p_class_Intro">
						物流速度很快，一大早就收到了，试用了一下午，说说感觉吧，我是把我的5S换了，5用了3年了，手机很流畅就是电池待机不行，一天充好几回。关注8很久了，由于价格太高一直没下手，刚好前几天华为美十也上了，去看过，确实不错，有想入手的冲动，可是这两天关注8的时候看到京东优惠蛮大的，就果断入手了。
					</p>
					<div class="div_class_ActualPicture">
		                <div class="div_class_GridCol_Col25" v-for="n in 4" :key="n">
		                    <img src="../../../../static/info_all_good.jpg">
		                </div>
		            </div>
				</div>
			</div>
			<p class="p_class_goodsSize">金色 , 64GB</p>
		</div>
		<div class="div_class_ratingBtn">
			<div class="btnItem">
		        <span>查看全部评价</span>
		    </div>
		    <div class="btnItem">
		        <span>购买咨询</span>
		    </div>
	    </div>
	</div>
</template>
<script>
	export default {
		name:'div_GoodsRating',
		data(){
			return {
				id:true
			}
		},
		created(){

		},
		methods:{
			ToMoreRating(){
				this.$emit('returnTabID','div_id_GoodRating');
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../assets/css/Util.scss';
  @import '../../../assets/css/Common.scss';
	#div_GoodsRating{
		font-size: 0.8rem;
		margin-bottom: 0.5rem;
		padding: 0.5rem 0.5rem 0rem;
		background: #ffffff;
		.div_class_RatingLink{
			@include setFjustify(space-between);
			padding: 0rem 0.3rem 0.5rem;
			p{
				color: $gcolorGray;
			}
			i{
				color: $gcolorGrayLight-1;
			}
			span{
				color: $gcolorHighlightRed;
			}
		}
	}

    /**底部的样式**/
    .div_class_ratingBtn{
		@include setFjustify(space-between);
		padding: 0.2rem 0rem 0.7rem;
		/*border-bottom: 1px solid #F1F1F1;*/
		.btnItem{
		 	width: 45%;
	    	text-align: center;
	    	color: #A2A2A2;
	    	border: 1px solid #F0F0F0;
	    	border-radius:5px;
	    	padding: 0.4rem 0;
	    	font-size: 0.8rem;
		}
    }

    /**评价详情样式**/
    .div_class_ratingContent{
    	padding: 0rem 0.2rem;
    	.userImg{
			width: 2rem;
			height: 2rem;
			border-radius:50%;
			overflow:hidden;
		}
		.p_class_Intro{
	        font-size: $gfontsizeSmall;
	        overflow: hidden;
	        text-overflow: -o-ellipsis-lastline;
	        text-overflow: ellipsis;
	        display: -webkit-box;
	        -webkit-line-clamp: 2;
	        -webkit-box-orient: vertical;
	        margin-bottom: 0.5rem;
	    }
	    .p_class_userInfo{
			@include setFjustify(space-between);
			align-items: center;
			padding: 0.4rem 0.2rem;
			.span_class_userName{
				font-size: $gfontsizeMini;
			}
			.span_class_star{
				color: $gcolorHighlightRed;
			}
		}
		.div_class_ActualPicture{
	        flex-wrap:wrap;
	        display: flex;
	        text-align: center;
	        img{
	          @include setWH(90%,95%);
	        }
	    }
	    .p_class_goodsSize{
			font-size: $gfontsizeSmall;
			padding: 0rem 0.2rem 0.5rem;
			color: $gcolorGrayLight-2;
		}
    }
