<!--
	筛选自动化测试
	@author:yxy
	@date:2017/11//27
-->
<template>
	<div class="div_class_GoodChoose">
		<!--已选汇总-->
		<div class="div_class_Grid">
			<div class=" div_class_GridCol_Col6 div_class_Rowhead">
				已选
			</div>
			<div class=" div_class_GridCol_Colcenter">
				<span v-for='item in chosedList' :key='item.title'>
					{{item.data+"  "}}
				</span>
				<span>
					{{num}}件
				</span>
			</div>
		</div>
		<!-- 颜色 版本 选择套餐 购买方式 -->
		<div class="div_class_GoodChoice" v-for='item in goodchooseList' :key='item.id'>
			<!-- 除保障服务以外的 -->
			<div class='div_class_ContentTop' v-if='item.name != "保障服务"'>
				<p class="p_class_Title">{{item.name}}</p>
				<div class="div_class_Flow">
					<div class="div_class_Cart div_class_FlowCol" v-for='subitem in item.submennu' :key='subitem.subid' :class='{all_class_Cliked_Red:subitem.subid == subitem.value}'
						@click='getGoodChoose(subitem,item,"submennu","subid")'
					>
						{{subitem.subname}}
					</div>
				</div>
			</div>
			<!-- 数量 + 保障服务 -->
			<div class='div_class_ContentBottom' v-else>
				<!-- 数量 -->
				<div class="div_class_Grid">
					<div class=" div_class_GridCol_Col6 div_class_Rowhead">
						数量
					</div>
					<div class=" div_class_GridCol_Colcenter">
						<el-input-number v-model="num" :min="1" :max="200" size="small">
						</el-input-number>
					</div>
				</div>
				<!-- 保障服务 -->
				<p class="p_class_Title">{{item.name}}</p>
				<!-- 各类保障服务 -->
				<div class="div_class_Service" v-for='subitem in item.submennu' :key='subitem.subid'>
					<p class="p_class_Title_Black">
						<i class="iconfont icon-guanzhu"></i>{{subitem.subname}}</p>
					<div class="div_class_Flow">
						<div class="div_class_Cart div_class_FlowCol" v-for='minitem in subitem.minmennu' :key='minitem.minid' :class='{all_class_Cliked_Red:minitem.minid == minitem.value}'
							@click='getGoodChoose(minitem,subitem,"minmennu","minid")'
						>
							{{minitem.minname+' '}}|{{' '+minitem.minprice}}
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>
<script>
	import {singleList} from '../ChooseList'

	let newSingle = singleList;
	export default {
		data() {
			return {
				num: 1,
				goodchooseList: '',
				chosedList: [], //商品规格
				chosedServiceList: [] //选择的服务
			}
		},
		mounted() {
			newSingle.initData('/goodchoose');
			this.goodchooseList =  newSingle.goodchooseList;
		},
		methods: {
			getGoodChoose(subdata,data,menuname,idname){
				newSingle.getGoodChoose(subdata,data,menuname,idname,this.goodchooseList);
				this.chosedList = newSingle.chosedList;
				this.chosedServiceList = newSingle.chosedServiceList;
			}
		}
	}

</script>
<style lang="scss">
	@import '../../../assets/css/Util.scss';
	.div_class_GoodChoose {
		margin: 20px;
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

	.p_class_Title {
		color: $gcolorGray;
		font-size: $gfontsizeNormal;
		margin: 0.5rem 0;
	}

	.all_class_Cliked_Red {
		@include setHighLight(1px);
	} //计数器
	.p_class_Title_Black {
		@extend .p_class_Title;
		color: black;
	}

</style>
