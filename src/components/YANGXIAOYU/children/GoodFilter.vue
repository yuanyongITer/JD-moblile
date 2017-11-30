<!--
  筛选自动化测试
  @author:yxy
  @date:2017/11//27
-->
<template>
	<div class="div_class_GoodFilter">
		<!-- 颜色 -->
		<div class="div_class_GoodChoice" v-for="item in goodchooseList" :key="item.id">
			<div class="div_class_Grid">
				<div class=" div_class_GridCol_Col6 div_class_Rowhead">
					{{item.name}}
				</div>
				<div class="div_class_GridCol_Colcenter">
					<p class="all_class_OverflowHidden">
						<span
							v-for="subitem in item.submennu" :key="subitem.subid"
							v-if= "subitem.subid == subitem.value"
						>
							{{subitem.subname+","}}
						</span>
					</p>
				</div>
				<div class=" div_class_GridCol_Col6 div_class_Rowhead" @click='getUnFold(item)'>
					<i class="iconfont icon-icon" v-if="item.id == isFoldid"></i>
					<i class="iconfont icon-icon-xia" v-else></i>
				</div>
			</div>

			<div class="div_class_Flow" :class='{all_class_Fold:item.id == isFoldid}'>
				<div class="div_class_Cart div_class_FlowCol "
					:class='{all_class_Cliked_Red:subitem.subid == subitem.value}'
					v-for="subitem in item.submennu"
				    :key="subitem.subid" @click='getgoodChoose(subitem,item)'>
					{{subitem.subname}}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import {multiList} from '../ChooseList'

	let newMulti = multiList;
	export default {
		data() {
			return {
				goodchooseList: '',
				chosedList: '',
				isFoldid:null//当前展开的id号
			}
		},
		mounted() {
			newMulti.initData('/goodfilter');
			this.goodchooseList = newMulti.goodchooseList;
		},
		methods: {
			getgoodChoose(subdata, data) {
				try{
					newMulti.getDataChoose(subdata, data);
				}
				catch(MultiExceed){
					this.showMsg();
				}
			},
			getUnFold(data){
				newMulti.getUnFold(data);
				this.isFoldid = newMulti.isFoldid;
			},
			// showMsg() {
			// 	this.$toast({
			// 		message: '筛选个数不能超过5个哦~',
			// 		position: 'center',
			// 		duration: 1000
			// 	})
			// }
		}
	}

</script>
<style lang="scss">
	@import '../../../assets/css/Util.scss';
	.div_class_GoodFilter{
		@include setWH(96%,100%);
		margin:0 auto ;
	}
	.div_class_Rowhead {
		white-space: nowrap;
		color: $gcolorGray;
	}
	.all_class_OverflowHidden {
		@include setOverflowEllipsis(1);
	}
	.div_class_Cart {
		padding: 0.3rem 0;
		border-radius: 0.2rem;
		text-align: center;
		border: 1px solid $gcolorGrayLight-2;
	}

	.all_class_Cliked_Red {
		@include setHighLight(1px);
	}
	//折叠状态
	.all_class_Fold{
		height:2rem;
		overflow:hidden;
	}
</style>
