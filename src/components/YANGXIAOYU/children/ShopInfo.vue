<!--
组件名：店铺信息组件
功能点：展示店铺的信息
-->
<template>
  <div class="div_class_ShopInfo">
    <div class="all_class_Header">
      <div class="div_class_Grid">
        <div class="div_class_GridCol_Col33">
          <img src="../../../../static/info_all_shopbg.jpg">
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
        <div class="div_class_GridCol_Col33 ">
          <p>98</p>
          <p>全部商品</p>
        </div>
        <div class="div_class_GridCol_Col33 ">
          <p>1</p>
          <p>店铺动态</p>
        </div>
      </div>
    </div>
    <div class="all_class_Footer">
      <div class="div_class_Grid">
        <div class="div_class_GridCol_Col48">
          <i class="iconfont icon-iconmoban"></i>
          <span>联系供应商</span>
        </div>
        <div class="div_class_GridCol_Col48">
          <i class="iconfont icon-dianpu"></i>
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
@import '../../../assets/css/Util.scss';
@import '../../../assets/css/Common.scss';
.div_class_ShopInfo{
  background: #FFF;
  padding: 0.5rem;
  img{
    @include setWH(80%,100%);
    border: 1px solid $gcolorBlueLight;
  }
  .div_class_GridCol_Col33{
    p{
      white-space: nowrap;
    }
    p:nth-child(2){
      @include setSizeColor($gfontsizeMini,$gcolorGrayLight-1)
    }
  }
  .all_class_Content{
    p{
      text-align: center;
    }
    .div_class_GridCol_Col33:nth-child(2){
      border-left:1px solid $gcolorBlueLight;
      border-right:1px solid $gcolorBlueLight;
    }
  }
  .all_class_Footer{
    .div_class_GridCol_Col48{
      border: 1px solid $gcolorBlueLight;
      padding:0.2rem 0;
      margin-right: 0.4rem;
      text-align: center;
    }
  }
}
</style>

