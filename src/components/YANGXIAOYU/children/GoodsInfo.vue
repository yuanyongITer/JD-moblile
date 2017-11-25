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
            <img src="../assets/img/good.jpg">
          </div>
          <div class=" div_class_GridCol_Col66">
            <p class="all_class_Hightlight_Red">￥2699.00</p>
            <p>商品编号:4461470</p>
          </div>
        </div>
      </div>
      <div class="all_class_Content">
        <div class="div_class_GoodChoice"  v-for="item in goodList" :key="item.name">
          <p class="p_class_Title">{{item.name}}</p>
          <div class="div_class_Flow">
            <div class="div_class_Cart div_class_FlowCol " v-for="subitem in item.choices" :key="subitem">
              {{subitem}}
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
        goodList: [{
          'name': '颜色',
          'choices': ['极光蓝', '幻夜黑', '宝石蓝', '璀璨绿']
        }, {
          'name': '版本',
          'choices': ['全网通(6GB 64GB)', '全网通(6GB 128GB)', '全网通(4GB 64GB)']
        }, {
          'name': '选择套装',
          'choices': ['官方标配']
        }, {
          'name': '购买方式',
          'choices': ['官方标配', '电信-买手机省话费', '移动-买手机省话费', '移动-老用户优惠机', '联通—买手机送话费']
        }]
      }
    },
    methods: {
      handleClick: function () {
        this.popupVisible = true
      }
    }
  }

</script>
<style lang='scss'>
  $hightlightcolor:red;
  $infocolor:#a7a7a2;
  $bordercolor:#e1eef6;
  $fontsize:0.8rem;
  /*自定义样式*/
  .div_class_GoodsInfo{
    .div_class_Grid:nth-child(3){
      padding:0.5rem 0;
      border-top:1px solid $bordercolor;
    }
  }
  

  /*网格布局*/
  .div_class_Grid {
    display: flex;
    align-items: flex-start;
    font-size: $fontsize;
    margin: 0.4rem 0;
    .div_class_GridCol_Col6 {
      //col6 表示占6/100 的宽度
      flex: 0 0 6%;
    }
    .div_class_GridCol_Col20 {
      flex: 0 0 20%;
    }
    .div_class_GridCol_Col33 {
      flex: 0 0 33%;
    }
    .div_class_GridCol_Col66 {
      flex: 0 0 66%;
    }
    .div_class_GridCol_Col48 {
      flex: 0 0 48%;
    }
    .div_class_GridCol_Col100 {
      //col100 表示占 100/100的宽度 即全屏
      flex: 0 0 100%;
    }
    .div_class_GridCol_Colcenter {
      //未单独固定宽度的,宽度均为自动撑开
      flex: 1;
      padding: 0 0.6rem; //作为中间元素保持左右间距
    }
  }
  /*流布局*/
  .div_class_Flow{
    display: flex;
    flex:1;
    flex-flow: row wrap;
    align-content: flex-start;
    font-size: $fontsize;
    .div_class_FlowCol{
      box-sizing: border-box;
      white-space: nowrap;
      flex: 0 0 10%;
      margin: 0.2rem 0.2rem;
      padding: 0 0.3rem;
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
      .div_class_Grid{//重写样式 双项目骰子式
        display: flex;
        justify-content: space-between;
      }
      .clicked {
        color: red;
        border: 1px solid red;
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
