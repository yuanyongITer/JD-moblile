<!--
组件名：店铺信息组件
功能点：展示店铺的信息
-->
<template>
  <div class="div_class_ShopInfo">
    <div class="all_class_Header">
      <div class="div_class_Grid">
        <div class="div_class_GridCol_Col33">
          <img src="../assets/img/shopbg.jpg">
        </div>
        <div class="div_class_GridCol_Col33">
          <p>荣耀京东自营旗舰店<i class="iconfont icon-ziying all_class_Hightlight_Red"></i></p>
          <p>荣耀官方旗舰店</p>
        </div>
      </div>
    </div>
    <div class="all_class_Content">
      <div class="div_class_Grid">
        <div class="div_class_GridCol_Col33">
          <p>154.4万</p>
          <p>关注人数</p>
        </div>
        <div class="div_class_GridCol_Col33">
          <p>98</p>
          <p>全部商品</p>
        </div>
        <div class="div_class_GridCol_Col33">
          <p>1</p>
          <p>店铺动态</p>
        </div>
      </div>
    </div>
    <div class="all_class_Footer">
      <div class="div_class_Grid">
        <div class="div_class_GridCol_Col48">
          <i class="iconfont icon-a536"></i>
          <span>联系供应商</span>
        </div>
        <div class="div_class_GridCol_Col48">
          <i class="iconfont icon-weibiaoti-"></i>
          <span>进店逛逛</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: '组件',
        popupVisible: false,
      }
    },
    methods: {
    }
  }

</script>
<style lang="scss">
$fontsize:0.8rem;
$infocolor:#a7a7a2;
$bordercolor:#e1eef6;
.div_class_ShopInfo{
  img{
    width: 80px;
    height: 30px;
    border: 1px solid $bordercolor;
  }
  .div_class_GridCol_Col33{
    p{
      white-space: nowrap;
    }
    p:nth-child(2){
      font-size: $fontsize - 0.2rem;
      color:$infocolor;
    }
  }
  .all_class_Content{
    p{
      text-align: center;
    }
    .div_class_GridCol_Col33:nth-child(2){
      border-left:1px solid $bordercolor;
      border-right:1px solid $bordercolor;
    }
  }
  .all_class_Footer{
    .div_class_GridCol_Col48{
      border: 1px solid $bordercolor;
      padding:0.2rem 0;
      margin-right: 0.4rem;
      text-align: center;
    }
  }
}
</style>

