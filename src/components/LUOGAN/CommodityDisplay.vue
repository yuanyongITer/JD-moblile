<template>
	<div>
		<div v-if="isDouble" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="20" @click="detailedIntroduction">
			<div class="div_classDoubleLeft" v-for="(item,index) in num" :key="index">
				<img src="../../assets/Lg_img/iphone8.jpg" class="img_classDouble">
				<div class="div_classText">
					<p class="p_classDoubleSize">Apple iPhone 8 Plus(A1864) 64GB 金色 移动联通电信4G手机 两周超长待机 开辟手机新时代</p>
					<span class="span_classMark">¥</span><span class="span_classValue">6688</span><span class="span_classShow">赠</span>
					<p class="p_classLength">
						<span class="all_class_Hightlight_Red"><i class="iconfont icon-ziying"></i></span><span class="span_classAppraise">272306条评价</span><span class="span_classData">99%好评</span>
					</p>
				</div>
			</div>
		</div>
		<div v-else>
			<div v-for="(item,index) in num" :key="index" class="div_class_Grid" @click="detailedIntroduction" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
				<div class="div_class_GridCol_Col33">
					<img src="../../assets/Lg_img/iphone8.jpg" class="img_classSingle">
				</div>
				<div class="div_class_GridCol_Col66">
					<p class="p_classSize">Apple iPhone 8 Plus(A1864) 64GB 金色 移动联通电信4G手机 两周超长待机 开辟手机新时代</p>
					<div class="div_classMarginTop">
						<span class="span_classMark">¥</span><span class="span_classValue">6688</span><span class="span_classShow">赠</span>
					</div>
					<div class="div_classMarginTop">
						<p>
							<span class="all_class_Hightlight_Red"><i class="iconfont icon-ziying"></i></span><span class="span_classAppraise ">272306条评价</span><span class="span_classData">99%好评</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- <div v-if="loading">
			<mt-spinner type="fading-circle" color="#26a2ff"></mt-spinner>
		</div> -->
		<div v-if="allLoad" class="div_classNomore">
			暂无更多数据
		</div>
	</div>
</template>
<script type="text/javascript">
	import { Indicator,Toast } from 'mint-ui';
	export default{
		data() {
			return{
				loading:false,
				allLoad:false,
				allLoaded:false,
				num:4,
				isDouble:true
			}
		},
		components:{
			Indicator,
			Toast
		},
		mounted(){
			
		},
		created(){
			// this.loadData();
		},
		methods:{
			detailedIntroduction(){
				// this.$router.push('/test');
			},
			loadMore() {
				let _this = this;
				console.log(_this.num);
				if(_this.allLoad){
					return;
				}
			    Indicator.open('加载中...');
				setTimeout(() => {
				  	if(_this.num === 16){
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
	      		for(let i=0;i<4;i++){
	      			this.num ++;
	      		}
      		}
		},
	}
</script>
<style scoped lang = 'scss'>
	$hightlightcolor:red;
    $fontsize:0.8rem;
    $infocolor:#a7a7a2;
	.div_classDoubleLeft{
		flex: none;
		display: flex;
		flex-direction: column;
		width: 49.5%;
		float: left;
		display: inline;
		margin-top:0.2rem;
		background-color:white;
	}
	.div_classDoubleRight{
		flex: none;
		display: flex;
		flex-direction: column;
		width: 49.5%;
		float: left;
		display: inline;
		margin-top:0.2rem;
		background-color:white;
	}
	.div_classSingleLeft{
		flex: none;
		width: 30%;
		margin-top:0.2rem;
		background-color:white;
	}
	.div_classSingleRight{
		flex: none;
		width: 70%;
		float: right;
		margin-top:0.2rem;
		background-color:white;
		padding-bottom: 1.2rem;
		border-bottom: 1px solid black;
	}
	.p_classDoubleSize{
		font-size: $fontsize;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:1;
		overflow: hidden;
		/*text-overflow: ellipsis;
		white-space: nowrap;*/
	}
	.div_classMarginTop{
		margin-top: 0.2rem;
	}
	.img_classDouble{
		width: 100%;
	}
	.img_classSingle{
		width: 100%;
		float: left;
		display: inline;
	}
	.div_classText{
		padding: 0.6rem;
	}
	.p_classSize{
		line-height: 1.2rem;
		font-size: $fontsize;
		display: -webkit-box; 
		-webkit-box-orient: vertical;
		-webkit-line-clamp:2;
		overflow: hidden;
		/*text-overflow:ellipsis;
		white-space: nowrap;*/
		margin-bottom: 0.8rem;
		margin-top: 0.8rem;
	}
	.p_classLength{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:1;
		overflow: hidden;
	}
	.span_classMark{
		font-size: $fontsize;
		color: $hightlightcolor;
	}
	.span_classValue{
		font-size: 1.0rem;
		margin-left: 0.2rem; 
		color: $hightlightcolor;
	}
	.span_classShow{
		margin-left : 0.3rem;
		padding: 0.05rem;
		color: white;
		background-color: $hightlightcolor;
		font-size: 0.7rem;
		border-radius: 0.1rem;
	}
	.span_classStop{
		font-size: 0.6rem;
		margin-right: 0.4rem;
		/*padding:0.05rem;*/
		border: 1px solid $hightlightcolor;
		color: $hightlightcolor; 
	}
	.span_classAppraise{
		margin-left: 0.3rem;
		font-size: 0.6rem;
		color:$infocolor;
		margin-right: 0.45rem; 
	}
	.span_classData{
		font-size: 0.6rem;
		color: $infocolor;
	}
	.div_class_Grid {
    display: flex;
    align-items: flex-start;
    font-size: $fontsize;
    margin: 0.4rem 0;
    border-bottom: 1px solid #e1eef6; 
    .div_class_GridCol_Col6{
      /*//col6 表示占6/100 的宽度*/
      flex: 0 0 6%;
    }
    .div_class_GridCol_Col33 {
      flex: 0 0 33%;
    }
    .div_class_GridCol_Col66 {
      flex: 0 0 66%;
    }
    .div_class_GridCol_Col20 {
      flex: 0 0 20%;
    }
    .div_class_GridCol_Col100 {
      //col100 表示占 100/100的宽度 即全屏
      flex: 0 0 100%;
    }
    .div_class_GridCol_Colcenter {
      //未单独固定宽度的,宽度均为自动撑开
      flex: 1;
      padding: 0 0.6rem; //作为中间元素保持左右间距
    }
  }
  .all_class_Hightlight_Red {
    /*//高亮的部分 比如说红色*/
    color: $hightlightcolor;
    .icon-ziying {
    	color: #fff;
	    background: $hightlightcolor;
	    border: 1px solid $hightlightcolor;
    }
  }
  .div_classNomore{
  	color: $infocolor;
  	font-size: $fontsize;
  	text-align: center;
  }
</style>