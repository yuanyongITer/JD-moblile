<template>
  <div>
  	<div class="div_class_Popup">
		<div v-for="(item,index) in dataList" :key="index">
			<div class="div_class_Grid"  style="justify-content:space-between;">
				<div class="div_class_GridCol_Col33">{{item.name}}</div>
				<div class="div_class_GridCol_Col33" @click="MoreColor(item.isSpread,index)">全部</div>
			</div>
			<div class="div_class_Flow div_class_GoodsDetail" :id=item.id>
				<div class="div_class_FlowCol" :class='{all_class_Cliked_Red:list.value == list.subid}' v-for="(list,e) in item.submennu"  :key="e" @click="choosed(list,index,e)">{{list.subname}}</div>
			</div>
		</div>
	</div>
  </div>
</template>
<script type="text/javascript">
	import axios from 'axios'
	export default{
		data(){
	  		return{
	  			clickColor:'',
				dataList:[],
			}
		},
		mounted(){
			axios.get('https://easy-mock.com/mock/5a1bf55b74e00f187e2d4620/skydotMobile/goodfilter').then((data)=>{
				data.data.forEach((data)=>{
					data.isSpread = 0;
					data.array = [];
					data.submennu.forEach((value)=>{
						value.judge = 0;
						value.value = "";
					})
				});
				this.dataList = data.data;
			})
		},
		methods:{
			choosed(data,index,e){
				if(!data.judge){
					if(index>0){
						if(this.dataList[index].array.length>4){
							return;
						}
						else{
							data.judge = 1;
							data.value = data.subid;
							this.dataList[index].array.push(data);
						}	
					}
					else{
						data.judge = 1;
						data.value = data.subid;
						this.dataList[index].array.push(data);
					}
				}
				else{
					data.judge = 0;
					data.value = '';
					let arr = this.dataList[index].array;
					for(var i=0,len = arr.length;i<len;i++){
						if(arr[i].subid == data.subid){
							this.dataList[index].array.splice(i,1);
							break;
						}
					}
					console.log(this.dataList[index].array);
				}
				event = window.event || arguments.callee.caller.arguments[0];
				let obj = event.srcElement || event.target;
				// console.log(event);
				// console.log(obj.parent);
			},   
	  		MoreColor(flag,index){
				// let _this = this;
				let height = Math.ceil((this.dataList[index].submennu.length)/3);
				height = height *25;
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
	@import '../../assets/css/Util.scss';
	@import '../../assets/css/common.scss';
  	$hightlightcolor:red;
	$fontsize:0.8rem;
	$infocolor:#a7a7a2;
	.all_class_Cliked_Red{
     @include setHighLight(1px);
  }
  .div_class_Popup{
  	display: flex;
  	flex-direction: column;
  	flex: 1;
  	min-height: 18rem;
     overflow-y: scroll;
     overflow-x: hidden; //禁用横向滚动条
  }
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