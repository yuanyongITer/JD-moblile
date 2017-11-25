<template>
	<div>
		<div class="div_class_Grid">
			<div class="div_class_GridCol_Col25" v-for="(item,index) in buttonGrop" :key="index">{{item.label}}<i :class="item.icon"></i></div>
		</div>
		<i class="icon-ziying"></i>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				buttonGrop:[
				{
					label:"综合",
					icon:"icon-jiantouxia"
				},
				{
					label:"销量",
				},
				{
					label:"价格",
					icon:"icon-ziying"
				},
				{
					label:"筛选",
					icon:"icon-touzantongpiao"
				}
				]
			}
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