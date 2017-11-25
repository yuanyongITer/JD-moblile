<template>
	<div id="div_GoodsRating">
		<div class="div_class_buttons">
			<button class="btn_item btn_active">全部 773</button>
			<button class="btn_item">好评 744</button>
			<button class="btn_item">中评 11</button>
			<button class="btn_item">差评 18</button>
		</div>
		<div v-infinite-scroll="loadMore" :infinite-scroll-disabled="loading" infinite-scroll-distance="10">
			<div class="div_class_Grid div_class_ratingBox" v-for="n in num">
				<div class="div_class_GridCol_Col6">
					<!-- <img src="./assets/img/peisong.jpg" class="userImg"> -->
				</div>
				<div class="div_class_GridCol_Colcenter">
					<div class="div_class_GridCol_Col100">
						<p class="p_class_userInfo p_class_margin">
							<span>令*****龙 <mt-badge size="small" color="#888">PLUS</mt-badge></span>
							<span>2017-11-11</span>
						</p>
						<p class="p_class_margin">⭐⭐⭐⭐⭐</p>
					</div>
					<div class="div_class_GridCol_Col100">
						<p class="p_class_margin">物流速度很快，一大早就收到了，试用了一下午，说说感觉吧，我是把我的5S换了，5用了3年了，手机很流畅就是电池待机不行，一天充好几回。关注8很久了，由于价格太高一直没下手，刚好前几天华为美十也上了，去看过，确实不错，有想入手的冲动，可是这两天关注8的时候看到京东优惠蛮大的，就果断入手了。屏幕确实大，像我这样的大手单手操作都感觉有些难，机子很流畅，用惯了苹果所以感觉很不错，就是希望待机能好一点。不过今天我设置的时候有几次卡顿，直接卡退出了，不知道是怎么回事。等用段时间再来评论用后效果。</p>
						<div class="div_class_ActualPicture">
							<!-- <img src="../../assets/yxyImg/info_all_good.jpg" class="imgItem">
							<img src="../../assets/yxyImg/info_all_good.jpg" class="imgItem">
							<img src="../../assets/yxyImg/info_all_good.jpg" class="imgItem">
							<img src="../../assets/yxyImg/info_all_good.jpg" class="imgItem">
							<img src="../../assets/yxyImg/info_all_good.jpg" class="imgItem">
							<img src="../../assets/yxyImg/info_all_good.jpg" class="imgItem"> -->
						</div>
						<p class="p_class_goodsSize">金色 , 64GB</p>
					</div>
					<div class="div_class_ratingFooter">
						<p class="p_class_goodsSize">购买日期：2017-11-15</p>
						<p><i class="iconfont icon-unie60b"></i>&nbsp;&nbsp;<i class="iconfont icon-pinglun"></i></p>
					</div>
				</div>
			</div>
		</div>
		<div v-if="allLoad" class="Nomore">
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
				num:0
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
      		}
		}
	}
</script>
<style scoped>
	.div_class_Grid {
	    display: flex;
	    align-items: flex-start;
	    font-size: 0.8rem;
	    margin: 0.4rem 0;
	}
	.div_class_GridCol_Col6 {
      flex: 0 0 6%;
    }
    .div_class_GridCol_Col33{
      flex: 0 0 33%;
    }
    .div_class_GridCol_Col66{
      flex: 0 0 66%;
    }
    .div_class_GridCol_Col100 {
      flex: 0 0 100%;
    }
    .div_class_GridCol_Colcenter {
      flex:1;
      padding: 0 0.6rem;
    }

    /*评价类型按钮的样式*/
    .div_class_buttons{
    	display: flex;
		justify-content: space-around;
		padding: 0.8rem 0 0.7rem;
		border-bottom: 1px solid #F1F1F1;
    }
    .btn_item{
    	padding: 0.3rem 0.7rem;
    	border: 1px solid red;
    	border-radius: 5px;
    	background: #FFA07A;
    }
    .btn_active{
    	background: #FFF;
    	color: red;
    }

    /*评价详情的样式*/
    .div_class_ratingBox{
    	padding-bottom: 1rem;
    	border-bottom: 1px solid #F1F1F1;
    	margin-bottom: 1rem;
    	margin:1rem;
    }
    .div_class_userInfo{
    	display: flex;
    	align-items:center;
    }
	.userImg{
		width: 2rem;
		height: 2rem;
		margin: 0.5rem;
		border-radius:50%;
		overflow:hidden;
	}
	.p_class_margin{
		margin: 0.3rem;
	}
	.p_class_userInfo{
		display: flex;
		justify-content: space-between;
	}

	/*用户上传的实物图*/
	.div_class_ActualPicture{
		display: flex;
	    align-items: flex-start;
	    flex-wrap: wrap;
	    justify-content: space-between; 
	}
	.imgItem{
		width: 30%;
	}

	/*商品规格样式*/
	.div_class_ratingFooter{
		display: flex;
	    align-items: flex-start;
	    justify-content: space-between; 
	}
	.p_class_goodsSize{
		margin: 0.4rem;
		color: #c1c1c1;
	}

	.Nomore{
		text-align: center;
	}
</style>