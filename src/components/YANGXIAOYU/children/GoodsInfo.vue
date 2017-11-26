<!--
组件名：商品信息组件
功能点：显示商品的信息，价格，优惠
-->
<template>
  <div class='div_class_GoodsInfo'>
    <div class="div_class_Grid">
      <div class=" div_class_GridCol_Col6 all_class_Hightlight_Red">
        <i class="iconfont icon-ziying"></i>
      </div>
      <div class=" div_class_GridCol_Colcenter">
        荣耀V9 全网通 高配版 6GB+64GB 极光蓝 移动联通电信4G手机 双卡双待
      </div>
      <div class=" div_class_GridCol_Col6 all_class_Hightlight_Red">
        <i class="iconfont icon-guanzhu"></i>
      </div>
    </div>
    <div class="div_class_Grid">
      <div class=" div_class_GridCol_Col100 all_class_Hightlight_Red">
        领券立减200！低至2499！纤薄机身，2K屏,双镜头,强劲芯片,你想要的快~荣耀爆款立省700！选品质，购荣耀>>>>>
      </div>
    </div>
    <div class="div_class_Grid">
      <div class=" div_class_GridCol_Col6 div_class_Rowhead">
        已选
      </div>
      <div class=" div_class_GridCol_Colcenter">
        极光蓝,全网通(6GB,64GB),官方标配,一件,保障服务
      </div>
      <div class=" div_class_GridCol_Col6 all_class_Hightlight_Red">
        <i class="iconfont icon-gengduo" @click="handleClick"></i>
      </div>
    </div>
    <!-- 弹出框 -->
    <mt-popup v-model="popupVisible" position="bottom" class="div_class_Popup">
      <div class="all_class_Header">
        <div class="div_class_Grid">
          <div class=" div_class_GridCol_Col33">
            <img src="../../../../static/info_all_good.jpg">
          </div>
          <div class=" div_class_GridCol_Col66">
            <p class="all_class_Hightlight_Red">￥2699.00</p>
            <p>商品编号:4461470</p>
          </div>
        </div>
      </div>
      <div class="all_class_Content">
        <!-- 颜色 -->
        <div class="div_class_GoodChoice">
          <p class="p_class_Title">颜色</p>
          <div class="div_class_Flow">
            <div class="div_class_Cart div_class_FlowCol " :class='{all_class_Cliked_Red:coloritem == clickedColor}' v-for="coloritem in colorList"
              :key="coloritem" @click="getColorChoose(coloritem)">
              {{coloritem}}
            </div>
          </div>
        </div>
        <!-- 版本 -->
        <div class="div_class_GoodChoice">
          <p class="p_class_Title">版本</p>
          <div class="div_class_Flow">
            <div class="div_class_Cart div_class_FlowCol " :class='{all_class_Cliked_Red:typeitem == clickedType}' v-for="typeitem in typeList"
              :key="typeitem" @click="getTypeChoose(typeitem)">
              {{typeitem}}
            </div>
          </div>
        </div>
        <!-- 选择套餐 -->
        <div class="div_class_GoodChoice">
          <p class="p_class_Title">选择套餐</p>
          <div class="div_class_Flow">
            <div class="div_class_Cart div_class_FlowCol " :class='{all_class_Cliked_Red:suititem == clickedSuit}' v-for="suititem in suitList"
              :key="suititem" @click="getSuitChoose($index)">
              {{suititem}}
            </div>
          </div>
        </div>
        <!-- 购买方式 -->
        <div class="div_class_GoodChoice">
          <p class="p_class_Title">购买方式</p>
          <div class="div_class_Flow">
            <div class="div_class_Cart div_class_FlowCol " :class='{all_class_Cliked_Red:purchaseitem == clikedPurchaseMode}' v-for="purchaseitem in purchaseModeList"
              :key="purchaseitem" @click="getPurchaseModeChoose(purchaseitem)">
              {{purchaseitem}}
            </div>
          </div>
        </div>
        <div class="div_class_Grid">
          <div class="p_class_Title">数量</div>
          <div class="">计数器</div>
        </div>
      </div>
      <div class="all_class_Footer">
        <mt-button type="danger" class="div_class_FooterBtn">加入购物车</mt-button>
      </div>
    </mt-popup>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        popupVisible: false,
        clickedColor: '极光蓝',
        clickedType: '全网通(6GB 64GB)',
        clickedSuit: '官方标配',
        clikedPurchaseMode: '官方标配',
        colorList: ['极光蓝', '幻夜黑', '宝石蓝', '璀璨绿'],
        typeList: ['全网通(6GB 64GB)', '全网通(6GB 128GB)', '全网通(4GB 64GB)'],
        suitList: ['官方标配'],
        purchaseModeList: ['官方标配', '电信-买手机省话费', '移动-买手机省话费', '移动-老用户优惠机', '联通—买手机送话费'],
      }
    },
    methods: {
      handleClick() {
        this.popupVisible = true
      },
      getColorChoose(data) {
        this.clickedColor = data;
      },
      getTypeChoose(data) {
        this.clickedType = data;
      },
      getSuitChoose(data) {
        this.clickedSuit = data;
      },
      getPurchaseModeChoose(data) {
        this.clikedPurchaseMode = data;
      }
    }
  }

</script>
<style lang='scss'>
  $hightlightcolor:red;
  $infocolor:#4d4d4c;
  $bordercolor:rgba(192, 192, 189, 0.2);
  $fontsize:0.8rem;
  /*自定义样式*/

  .div_class_GoodsInfo {
    .div_class_Grid:nth-child(3) {
      padding: 0.5rem 0;
      border-top: 1px solid $bordercolor;
    }
  }
  /*流布局*/

  .div_class_Flow {
    display: flex;
    flex: 1;
    flex-flow: row wrap;
    align-content: flex-start;
    font-size: $fontsize;
    .div_class_FlowCol {
      box-sizing: border-box;
      white-space: nowrap;
      flex: 0 0 45%;
      margin: 0.2rem;
      padding: 0.1rem 0.5rem;
    }
  }
  /*公共样式*/

  .div_class_Rowhead {
    white-space: nowrap;
    color: $infocolor;
  }

  .all_class_Hightlight_Red {
    //高亮的部分 比如说红色
    color: $hightlightcolor;
    .icon-ziying {
      color: #fff;
      background: $hightlightcolor;
      border: 1px solid $hightlightcolor;
    }
  } //后期考虑提成函数,若无需边框则边框参数为0
  .all_class_Cliked_Red {
    color: $hightlightcolor;
    border: 1px solid $hightlightcolor !important;
  }
  /*弹出框*/

  .div_class_Popup {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    .all_class_Header {
      border-bottom: 1px solid #e1eef6;
      img {
        width: 60px;
        height: 80px;
        margin-left: 0.4rem;
      }
      .div_class_Grid {
        //重写grid布局样式
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p {
        padding: 0.4rem 0;
      }
      p:first-child {
        font-size: $fontsize+0.2rem;
        font-weight: bold;
      }
    }
    .all_class_Content {
      width: 90%;
      min-height: 10rem;
      overflow-y: scroll;
      overflow-x: hidden; //禁用横向滚动条
      flex: 1; //让底部栏永远在底部
      margin: auto;
      .p_class_Title {
        color: $infocolor;
        font-size: $fontsize;
        margin: 0.5rem 0;
      }
      .div_class_Cart {
        text-align: center;
        border: 1px solid $infocolor;
      }
      .div_class_Grid {
        //重写样式 双项目骰子式
        display: flex;
        justify-content: space-between;
      }
    }
    .all_class_Footer {
      width: 100%;
      .div_class_FooterBtn {
        width: 100%;
        font-size: $fontsize + 0.2rem;
      }
    }
  }

</style>
