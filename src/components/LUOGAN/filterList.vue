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
	<div v-for="(item,index) in dataList" :key="index">
		<div class="div_class_Grid"  style="justify-content:space-between;">
			<div class="div_class_GridCol_Col33">{{item.type}}</div>
			<div class="div_class_GridCol_Col33" @click="MoreColor(item.isSpread,index)">全部</div>
		</div>
		<div class="div_class_Flow div_class_GoodsDetail" :id=item.id>
			<div class="div_class_FlowCol" v-for="(list,e) in item.list"  :key="e" @click="choosed()">{{list}}</div>
		</div>
	</div>
  </div>
</template>
<script type="text/javascript">
	export default{
		data(){
	  		return{
				dataList:[{
					type:'颜色',
					list:['黑色','灰色','白色','粉色','红色','玫瑰红','紫色','奶白','1','2','3','5','7','9','11','123','144','155','166'],
					id:'div_id_Height1',
					isSpread:false
				},{
					type:'品牌',
					list:['Apple','华为','小米','三星','魅族','OPPO','vivo'],
					id:'div_id_Height2',
					isSpread:false
				}],
				serveList:['京东配送','货到付款','仅看有货','促销','全球购','PLUS专享价','新品','配送全球']
			}
		},
		methods:{
			choosed(){
				event = window.event || arguments.callee.caller.arguments[0];
				let obj = event.srcElement || event.target;
				console.log(event);
				console.log(obj.parent);
			},
	  		MoreColor(flag,index){
				// let _this = this;
				let height = Math.ceil((this.dataList[index].list.length)/3);
				height = height *23;
				this.dataList[index].isSpread = !flag;
				if(!flag){
					document.getElementById(this.dataList[index].id).style.height = height+"px";
					document.getElementById(this.dataList[index].id).overflow = "auto";
				} else {
					document.getElementById(this.dataList[index].id).style.height = 10+"px";
					document.getElementById(this.dataList[index].id).overflow = "hidden";
				}
	  		},
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
  .div_class_GoodsDetail{
	height: 10px;
	overflow: hidden;
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