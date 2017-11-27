<template>
	<div id="div_id_GoodsRating">
		<div class="div_class_rateButtons">
			<div v-for="(item,index) in RatingList" :key="index">
				<div class="div_class_Grid btn_item" :class='{btn_active:index == clickedRatingIndex}' @click="getRateChoose(index)">
					<span v-if="index == clickedRatingIndex" style="color: red;">√</span>
		           	<span v-else style="color: #FFA07A;">√</span>
		           	{{item}}
				</div>
			</div>
			<div class="all_class_Border1px"></div>
		</div>

		<div v-infinite-scroll="loadMore" :infinite-scroll-disabled="loading" infinite-scroll-distance="10" class="div_class_ratingContainer">
			<div class="div_class_Grid" v-for="n in num">
				<div class="div_class_GridCol_Col6">
					<img src="../../../static/info_all_peisong.jpg" class="userImg">
				</div>
				<div class="div_class_GridCol_Colcenter div_class_ratingText">
					<div class="div_class_userInfo">
						<div class="p_class_margin">
							<p class="p_class_userName">令*****龙
								<mt-badge size="small" color="#888">PLUS</mt-badge>
							</p>
							<p class="all_class_Hightlight_Red">
								<span  v-for="(star,index) in 5">★</span>
							</p>
						</div>
						<p class="p_class_ratingTime">2017-11-11</p>
					</div>
					<div class="div_class_GridCol_Col100">
						<p class="p_class_margin">
							物流速度很快，一大早就收到了，试用了一下午，说说感觉吧，我是把我的5S换了，5用了3年了，手机很流畅就是电池待机不行，一天充好几回。关注8很久了，由于价格太高一直没下手，刚好前几天华为美十也上了，去看过，确实不错，有想入手的冲动，可是这两天关注8的时候看到京东优惠蛮大的，就果断入手了。屏幕确实大，像我这样的大手单手操作都感觉有些难，机子很流畅，用惯了苹果所以感觉很不错，就是希望待机能好一点。不过今天我设置的时候有几次卡顿，直接卡退出了，不知道是怎么回事。等用段时间再来评论用后效果。
						</p>
						<div class="div_class_ActualPicture">
							<img src="../../../static/info_all_good.jpg" class="imgItem">
							<img src="../../../static/info_all_good.jpg" class="imgItem">
							<!-- <img src="../../../static/info_all_good.jpg" class="imgItem">
							<img src="../../../static/info_all_good.jpg" class="imgItem"> -->
							<!-- <img src="../../../static/info_all_good.jpg" class="imgItem">
							<img src="../../../static/info_all_good.jpg" class="imgItem"> -->
						</div>
						<p class="p_class_goodsSize">金色 , 64GB</p>
					</div>
					<div class="div_class_ratingFooter">
						<p class="p_class_goodsSize">购买日期：2017-11-15</p>
						<p>
							<i class="iconfont icon-unie60b"></i>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<i class="iconfont icon-pinglun"></i>&nbsp;&nbsp;
						</p>
					</div>
				</div>
			</div>
			<div class="all_class_Border1px"></div>
		</div>
		<div v-if="allLoad" class="div_class_HasNoMore">
			暂无更多数据
		</div>
	</div>
</template>
<script>
	import { Indicator,Toast } from 'mint-ui';
	export default {
		data() {
			return{
				DataList:[],
				loading:false,
				allLoad:false,
				allLoaded:false,
				num:0,
				RatingList:['全部(821)','好评(744)','中评(11)','差评(18)'],
				clickedRatingIndex:'0',
			}
		},
		components:{
			Indicator,
			Toast
		},
		created(){
			this.loadData();
		},
		methods:{
			loadMore() {
				let _this = this;
				if(_this.allLoad){
					return;
				}
			    Indicator.open('加载中...');
				setTimeout(() => {
				  	if(_this.num === 15){
				  		Indicator.close();
				  		_this.allLoad = true;
				  		return;
				  	} else {
				    	_this.loadData();
				  	}
				    Indicator.close();
				}, 1000);
			},
	      	loadData(){
	      		for(let i=0;i<3;i++){
	      			this.num ++;
	      		}
      		},
      		getRateChoose(index){
      			this.clickedRatingIndex = index;
      		}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../assets/css/Util.scss';
  	@import '../../assets/css/Common.scss';
  	#div_id_GoodsRating{
  		background: $gcolorBgGray;
  	}
    /*评价类型按钮的样式*/
    .div_class_rateButtons{
    	@include setFjustify(space-around);
		padding:0.8rem 0rem 0.7rem;
		margin-bottom: 0.5rem;
		background: #FFFFFF;
    }
    .btn_item{
    	padding: 0.2rem 0.5rem;
    	border: 1px solid #FBBBB9;
    	border-radius: 5px;
    	background: #FEEEEE;
    }
    .btn_active{
    	background: #FFFFFF;
    	color: red;
    }

    /*评价详情的样式*/
    .div_class_ratingContainer{
    	border-top: 1px solid #F1F1F1;
    	background: #FFFFFF;
    }
    .div_class_userInfo{
    	@include setFjustify(space-between);
    	margin: 0.3rem;
    }
    .p_class_userName{
    	font-size: $gfontsizeMini;
    }
    .p_class_ratingTime{
    	display: flex;
		align-self: center;
    	font-size: $gfontsizeSmall;
    	color: $gcolorGrayLight-2;
    	padding-right: 0.2rem;
	}
	.userImg{
		width: 2rem;
		height: 2rem;
		margin: 0.5rem;
		border-radius:50%;
		overflow:hidden;
	}
	.p_class_margin{
		line-height: 1.3rem;
	}
	
	/*用户上传的实物图*/
	.div_class_ActualPicture{
		@include setFjustify(space-between);
	    align-items: flex-start;
	    flex-wrap: wrap;
	}
	.imgItem{
		width: 30%;
	}

	/*商品规格样式*/
	.div_class_ratingFooter{
		@include setFjustify(space-between);
	    align-items: flex-start;
	}
	.p_class_goodsSize{
		font-size: $gfontsizeSmall;
		line-height: 1.5rem;
		color: $gcolorGrayLight-2;
	}

	/*点赞*/
	.icon-unie60b:hover,
	.icon-pinglun:hover{
		color: red;
	}
</style>