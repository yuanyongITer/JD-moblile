<!--
组件名：商品信息组件
功能点：显示商品的信息，价格，优惠
-->
<template>
  <div class='goodsinfo'>
    <div class="Grid">
      <div class="Grid-cell u-1of8">
        <i class="iconfont icon-ziying "></i>
      </div>
      <div class="Grid-cell center ">
        荣耀V9 全网通 高配版 6GB+64GB 极光蓝 移动联通电信4G手机 双卡双待
      </div>
      <div class="Grid-cell u-1of8 red">
        <i class="iconfont icon-guanzhu"></i>
      </div>
    </div>
    <div class="Grid">
      <div class="Grid-cell u-full red">
        领券立减200！低至2499！纤薄机身，2K屏,双镜头,强劲芯片,你想要的快~荣耀爆款立省700！选品质，购荣耀>>>>>
      </div>
    </div>
    <div class="Grid">
      <div class="Grid-cell u-1of8 title">
        已选
      </div>
      <div class="Grid-cell center ">
        极光蓝,全网通(6GB,64GB),官方标配,一件,保障服务
      </div>
      <div class="Grid-cell u-1of8 red">
        <i class="iconfont icon-gengduo" @click="handleClick"></i>
      </div>
    </div>
    <!-- 弹出框 -->
    <mt-popup v-model="popupVisible" position="bottom" class="popup">
      <div class="header">
        <div class="Grid">
          <div class="Grid-cell u-1of3">
             <img src="../assets/img/good.jpg">
          </div>
          <div class="Grid-cell u-1of7">
            <p class="red">￥2699.00</p>
            <p>商品编号:4461470</p>
          </div>
        </div>
      </div>
      <div class="content">
        <p class="title">颜色</p>
        <div class="Grid">
          <div class="Grid-cell carts clicked">极光蓝</div>
          <div class="Grid-cell carts">幻夜黑</div>
          <div class="Grid-cell carts">宝石蓝</div>
          <div class="Grid-cell carts">翡翠绿</div>
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
  $adcolor:red;
  $infocolor:#a7a7a2;
  $fontsize:0.8rem;
  .red {
    color: $adcolor;
  }
  .icon-ziying {
    color: #fff;
    background: $adcolor;
    border: 1px solid $adcolor;
  }
  .Grid {
    display: flex;
    align-items: flex-start;
    font-size: $fontsize;
    padding: 0.5rem;
    .Grid-cell {
      flex: 1;
    }
    .u-1of8 {
      flex: 0 0 6%;
    }
    .u-1of3{
      flex: 0 0 33.3%;
    }
    .u-1of7{
      flex: 0 0 66.6%;
    }
    .center {
      flex-wrap: wrap;
      padding: 0 0.5rem;
    }
    .u-full {
      flex: 0 0 100%;
      flex-wrap: wrap;
    }
    .title {
      white-space: nowrap;
      color: $infocolor;
    }

  }

  .goodsinfo {
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
        .Grid{//重写grid布局样式
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
