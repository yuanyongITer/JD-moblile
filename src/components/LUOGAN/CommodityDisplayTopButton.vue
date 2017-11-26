<template>
	<div>
		<div class="div_class_Grid">
			<div class="div_class_GridCol_Col25">综合<i class="iconfont icon-arrow-right"></i></div>
			<div class="div_class_GridCol_Col25">销量</div>
			<div class="div_class_GridCol_Col25">价格<i class="iconfont icon-touzantongpiao-copy"></i></div>
			<div class="div_class_GridCol_Col25" @click="openSideBar">筛选<i class="iconfont icon-loudoulianxirenxiangqing"></i></div>
		</div>
		<mt-popup v-model="popupVisible" position="right" id="popup_id_RightSize">
			<filterList></filterList>
		</mt-popup>
	</div>
</template>
<script type="text/javascript">
import filterList from './filterList'
	export default{
		data(){
			return{
				popupVisible:false,
			}
		},
		mounted(){
			let height = document.documentElement.clientHeight;
			let width = document.documentElement.clientWidth - 55;
			document.getElementById('popup_id_RightSize').style.width = width + "px";
			document.getElementById('popup_id_RightSize').style.height = height + "px";
		},
		methods:{
			openSideBar(){
				this.popupVisible = true;
			}
		},
		components:{
			filterList
		}
	}
</script>
<style scoped lang = 'scss'>
	$hightlightcolor:red;
    $fontsize:0.8rem;
    $infocolor:#a7a7a2;
	.div_class_Grid {
    display: flex;
    align-items: flex-start;
    font-size: $fontsize;
    margin: 0.4rem 0;
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
    .div_class_GridCol_Col25{
    	flex: 0 0 25%;
    	text-align: center;
    }
    .div_class_GridCol_Col100 {
      /*col100 表示占 100/100的宽度 即全屏*/
      flex: 0 0 100%;
    }
    .div_class_GridCol_Colcenter {
      /*未单独固定宽度的,宽度均为自动撑开*/
      flex: 1;
      padding: 0 0.6rem; //作为中间元素保持左右间距
    }
  }
</style>