<template>
	<div>
		<div class="div_class_Grid">
			<div class="div_class_GridCol_Col25" @click="showMenu">{{topButton}}<i class="iconfont icon-arrow-right"></i>
			</div>
			<div class="div_class_GridCol_Col25">销量</div>
			<div class="div_class_GridCol_Col25">价格<i class="iconfont icon-touzantongpiao-copy"></i></div>
			<div class="div_class_GridCol_Col25" @click="openSideBar">筛选<i class="iconfont icon-loudoulianxirenxiangqing"></i></div>
		</div>
		<div v-show="menu" id="div_id_MenuStyle">
			<div v-for="(item,index) in menuList" class="div_class_MenuList" :key="index" @click="closeMenu(item.label)" :class='{all_class_Cliked_Color:item.label == clickColor}'>{{item.label}}</div>
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
				menu:false,
				flag:true,
				menuList:[{
					label:'综合排序',
					id:'1',
					value:'综合排序',
				},{
					label:'新品优先',
					id:'2',
					value:'新品优先',
				},{
					label:'评论数从高到低',
					id:'3',
					value:'评论数从高到低',
				}],
				clickColor:"综合排序",
				topButton:'综合',
			}
		},
		props:['deliver'],
		watch:{
			deliver(value){
				console.log(value);
			},
			popupVisible(value){
				if(value)
					document.body.style.overflow = "hidden";
				else
					document.body.style.overflow = "auto";
			},
			menu(value){
				if(value){
					document.body.style.overflow = 'hidden';
				}
				else
					document.body.style.overflow = "auto";
			},
		},
		mounted(){
			let height = document.documentElement.clientHeight;
			let width = document.documentElement.clientWidth ;
			let widthPop = width - 55;
			document.getElementById('popup_id_RightSize').style.width = widthPop + "px";
			document.getElementById('div_id_MenuStyle').style.width = width +"px";
		},
		methods:{
			openSideBar(){
				this.popupVisible = true;
			},
			showMenu(){
				if(!this.menu){
					this.menu = true;
				}
				else{
					this.menu = false;
				}
			},
			closeMenu(value){
				this.menu = false;
				this.clickColor = value;
				this.topButton = this.clickColor.slice(0,2);
			}
		},
		components:{
			filterList
		}
	}
</script>
<style scoped lang = 'scss'>
	#popup_id_RightSize{
		height: 100vh;
		overflow-y: scroll;
	}
	#div_id_MenuStyle{
		position: absolute;
	}
	$hightlightcolor:red;
    $fontsize:0.8rem;
    $infocolor:#a7a7a2;
    .all_class_Cliked_Color{
    	color: $hightlightcolor;
    }
    .div_class_MenuList{
    	position: relative;
    	font-size: $fontsize;
    	padding: 1.0rem;
    	margin-left: 0.2rem;
    	background-color: #f9f9f9;
	}
	.div_class_Grid {
    display: flex;
    flex: 1;
   /* align-items: flex-start;*/
    font-size: $fontsize;
    z-index: 101 ;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    /*margin: 0.4rem 0;*/
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