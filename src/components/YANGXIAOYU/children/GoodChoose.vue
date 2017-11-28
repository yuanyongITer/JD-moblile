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
        {{chosedList.slice(0,5).join(" ")}}{{' '+num}}件
      </div>
    </div>
    <!-- 颜色 版本 选择套餐 购买方式 -->
    <div class="div_class_GoodChoice" v-for='item in goodchooseList' :key='item.id'>
      <!-- 除保障服务以外的 -->
      <div class='div_class_ContentTop' v-if='item.name != "保障服务"'>
        <p class="p_class_Title">{{item.name}}</p>
        <div class="div_class_Flow">
          <div class="div_class_Cart div_class_FlowCol" v-for='subitem in item.submennu' :key='subitem.subid' :class='{all_class_Cliked_Red:subitem.subid == subitem.value}'
            @click='getGoodChoose(subitem,item)'>
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
            <div class="div_class_Cart div_class_FlowCol"
				v-for='minitem in subitem.minmennu'
				:key='minitem.minid'
				:class='{all_class_Cliked_Red:minitem.minid == minitem.value}'
				@click='getServiceChoose(minitem,subitem)'
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
  import axios from 'axios'
  export default {
    data() {
      return {
        num: 1,
        goodchooseList: '',
		chosedList: [],//商品规格
		chosedServiceList:[]//选择的服务
      }
    },
    mounted() {
      axios.get('https://easy-mock.com/mock/5a1bf55b74e00f187e2d4620/skydotMobile/goodchoose')
        .then(response => {
          // this.goodchooseList.forEach(element => {
          // 	element.submennu.forEach(subelement => {
          // 		subelement.value = ' ';
          // 	});
		  // });
		  //给子菜单加上value属性
          response.data.forEach(element => {
            element.submennu.forEach(subelement => {
				subelement.value = ' ';
				//如果有三级菜单 /**********优化****/
				if(subelement.minmennu != undefined){
					subelement.minmennu.forEach(minelement =>{
						minelement.value = ' ';
					})
				}
            });
          })
		  this.goodchooseList = response.data;
        })
    },
    methods: {
      getGoodChoose(subdata, data) {
        //每次点击先清空 然后赋值
        data.submennu.forEach(item => {
          //置空除被点击元素以外同栏的其他元素
			if (item.subid != subdata.subid) {
				item.value = ' ';
			}
        });
        //判断当前元素是否是高亮状态
        if (subdata.value == ' ') {
          subdata.value = subdata.subid;
        } else { //如果是高亮状态  那么再次点击则是取消选择
          subdata.value = ' ';
        }
        this.getAllChosed();
	  },
	  getServiceChoose(mindata,subdata){
		subdata.minmennu.forEach(item=>{
			if(item.minid != mindata.minid){
				item.value = ' ';
			}
		})
		if (mindata.value == ' ') {
			mindata.value = mindata.minid;
		} else { //如果是高亮状态  那么再次点击则是取消选择
			mindata.value = ' ';
		}
		this.getAllChosed();
	  },
      getAllChosed() {
        //每次先清空汇总数组
		this.chosedList = [];
		this.chosedServiceList = [];
        this.goodchooseList.forEach(item => {
          item.submennu.forEach(subelement => {
            if (subelement.value == subelement.subid) {
              this.chosedList.push(subelement.subname);
			}
			/************怎么优化*************** */
			if(subelement.minmennu != undefined){
				subelement.minmennu.forEach(minelement =>{
					if(minelement.value == minelement.minid) {
						this.chosedServiceList.push(minelement.minname +" "+minelement.minprice);
					}
				})
			}
          });
		})
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
