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
    <mt-popup v-model="popupVisible" position="bottom" class="popup">
      <div class="header">
        <div class="div_class_Grid">
          <div class=" div_class_GridCol_Col33">
             <img src="../assets/img/good.jpg">
          </div>
          <div class=" div_class_GridCol_Col66">
            <p class="red">￥2699.00</p>
            <p>商品编号:4461470</p>
          </div>
        </div>
      </div>
      <div class="content">
        <p class="title">颜色</p>
        <div class="div_class_Grid">
          <div class=" carts clicked">极光蓝</div>
          <div class=" carts">幻夜黑</div>
          <div class=" carts">宝石蓝</div>
          <div class=" carts">翡翠绿</div>
        </div>
      </div>
      <div class="footer">
          <mt-button type="danger" class="shoppingbtn">加入购物车</mt-button>
      </div>
    </mt-popup>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        popupVisible: false,
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
  $fontsize:0.8rem;
  /*网格布局*/
  .div_class_Grid {
    display: flex;
    align-items: flex-start;
    font-size: $fontsize;
    margin: 0.4rem 0;
    .div_class_GridCol_Col6 {//col6 表示占6/100 的宽度
      flex: 0 0 6%;
    }
    .div_class_GridCol_Col33{
      flex: 0 0 33%;
    }
    .div_class_GridCol_Col66{
      flex: 0 0 66%;
    }
    .div_class_GridCol_Col100 {//col100 表示占 100/100的宽度 即全屏
      flex: 0 0 100%;
    }
    .div_class_GridCol_Colcenter {//未单独固定宽度的,宽度均为自动撑开
      flex:1;
      padding: 0 0.6rem;//作为中间元素保持左右间距
    }
  }
  /*公共样式*/
  .div_class_Rowhead{
    white-space: nowrap;
    color: $infocolor;
  }
  .all_class_Hightlight_Red{//高亮的部分 比如说红色
    color: $hightlightcolor;
    .icon-ziying{
        color: #fff;
        background: $hightlightcolor;
        border: 1px solid $hightlightcolor;
    }
  }
  /*自定义样式*/
  .div_class_GoodsInfo {
    .popup {
      width: 100%;
      height: 70%;
      display: flex;
      flex-direction: column;
      .header {
        border-bottom: 1px solid #e1eef6;
        img {
          width: 60px;
          height: 80px;
        }
        .div_class_Grid{//重写grid布局样式
           display: flex;
           justify-content: center;
           align-items: center;
        }
        p{
          padding:  0.4rem 0;
        }
        p:first-child{
          font-size:$fontsize+0.2rem;
          font-weight: bold; 
        }
      }
      .content {
        width: 90%;
        flex: 1;
        margin: auto;
        .title {
          color: $infocolor;
          font-size: $fontsize;
          margin-top:0.2rem;
        }
        .carts {
          text-align: center;
          border: 1px solid $infocolor;
          padding: 0.2rem  0.4rem;
          margin-right: 0.8rem;
        }
        .clicked{
          color: red;
          border: 1px solid red;
        }
      }
      .footer{
        width: 100%;
        .shoppingbtn{
          width: 100%;
        }
      }
    }
  }
</style>
