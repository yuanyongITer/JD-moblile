<template>
	<div>
		<div>
			<div class="div_class_Grid">
				<div class="div_class_GridCol_Col33">京东服务</div>
				<div class="div_class_GridCol_Col66">
					<p class="p_class_Length"><i class="iconfont icon-icon-yxj-address"></i>四川省绵阳市青义镇西南科技大学东六宿舍楼B523</p>
				</div>
			</div>
			<div class="div_class_Flow">
				<div class="div_class_FlowCol" v-for="(item,index) in serveList">{{item}}</div>
			</div>
		</div>
		<div>
			<div class="div_class_Grid">
				<div class="div_class_GridCol_Col33">颜色</div>
				<div class="div_class_GridCol_Col66" style="text-align:right" @click="MoreColor">更多</div>
			</div>
			<div class="div_class_Flow" id="div_id_Height">
				<div class="div_class_FlowCol" v-for="(item,index) in colorList" >{{item}}</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				serveList:['京东配送','货到付款','仅看有货','促销','全球购','PLUS专享价','新品','配送全球'],
				colorList:['黑色','灰色','白色','粉色','红色','玫瑰红','紫色']
			}
		},
		methods:{
			MoreColor(){
				let height = this.colorList.length;
				height = height / 3;
				console.log(height);
				document.getElementById('div_id_Height').style.height = 120+"px";
				document.getElementById('div_id_Height').overflow = "auto";
			},
			MoreList(){
				document.getElementById('div_id_Height').style.height = 120+"px";
				document.getElementById('div_id_Height').overflow = "auto";
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
      text-align: center;
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
  .p_class_Length{
  	font-size: $fontsize;
  	color: $hightlightcolor;
  	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp:1;
	overflow: hidden;
  }
  #div_id_Height{
  	height: 1000px;
  	/*overflow: hidden;*/
  }
  .div_class_Flow{
    display: flex;
    flex:1;
    padding:1rem 0rem;
    flex-flow: row wrap;
    align-content: flex-start;
    text-align: center;
    font-size: $fontsize;
    .div_class_FlowCol{
      font-size: 0.6rem;
      box-sizing: border-box;
      background-color: #fafafa;
      white-space: nowrap;
      flex: 0 0 30%;
      margin: 0.2rem;
      padding: 0.1rem  0.5rem ;
    }
  }
</style>