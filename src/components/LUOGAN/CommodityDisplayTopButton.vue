<template>
	<div id="div_id_topbtn">
		<div class="div_class_Grid">
			<div class="div_class_GridCol_Col25" @click="showMenu">{{topButton}}<i class="iconfont icon-arrow-right"></i>
			</div>
			<div class="div_class_GridCol_Col25">销量</div>
			<div class="div_class_GridCol_Col25">价格<i class="iconfont icon-touzantongpiao-copy"></i></div>
			<div class="div_class_GridCol_Col25" @click="openSideBar">筛选<i class="iconfont icon-loudoulianxirenxiangqing"></i></div>
			<div class="all_class_Border1px"></div>
		</div>

		<div v-show="menu" id="div_id_MenuStyle">
			<div v-for="(item,index) in menuList" class="div_class_MenuList" :key="index" @click="closeMenu(item.label)" :class='{all_class_Cliked_Color:item.label == clickColor}'>{{item.label}}</div>
		</div>
		<mt-popup v-model="popupVisible" position="right" id="popup_id_RightSize">
			<!-- <filterList></filterList> -->
			<SpreadTest></SpreadTest>
		</mt-popup>
	</div>
</template>
<script type="text/javascript">
	import filterList from './filterList'
	import SpreadTest from './SpreadTest' 
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
			// document.getElementById('popup_id_RightSize').style.width = widthPop + "px";
			// document.getElementById('popup_id_RightSize').style.height = height + "px";
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
			filterList,SpreadTest
		}
	}
</script>
<style scoped lang = 'scss'>
	@import '../../assets/css/Util.scss';
    @import '../../assets/css/common.scss';
	#popup_id_RightSize{
		@include setWH(85%,100%);
	}
	#div_id_MenuStyle{
		position: absolute;
	}
    .all_class_Cliked_Color{
    	color: $gcolorHighlightRed;
    }
    .div_class_MenuList{
    	position: relative;
    	font-size: $gfontsizeNormal;
    	padding: 1.0rem;
    	margin-left: 0.2rem;
    	background-color: #f9f9f9;
	}
	.div_class_Grid {
		@include setFjustify(space-around);
	    font-size: $gfontsizeNormal;
	    position: fixed;
	    top: 0;
	    width: 100%;
	    background-color: #fff;
	    margin: 0rem;
	    .div_class_GridCol_Col25{
	    	padding: 0.5rem 0rem;
	    	text-align: center;
	   	}
  	}
</style>