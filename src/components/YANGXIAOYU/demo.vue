<template>
  <div class='div_class_ShopDetail'>
    <!--顶部-->
    <mt-navbar class="div_class_NavBar" v-model="selected" fixed ='true'>
      <i class="iconfont icon-left-copy"></i>
      <mt-tab-item id="div_id_Good">商品</mt-tab-item>
      <mt-tab-item id="div_id_GoodDetail">详情</mt-tab-item>
      <mt-tab-item id="div_id_GoodRating">评价</mt-tab-item>
      <i class="iconfont icon-gengduo"></i>
    </mt-navbar>
    <!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="div_id_Good">
        <div class="div_class_ShopContent">
          <!--轮播图-->
          <PictureRotation></PictureRotation>
          <!--商品信息-->
          <GoodsInfo></GoodsInfo>
          <!--商品规格及配送-->
          <GoodsDelivery></GoodsDelivery>
          <!--商品评价-->
          <GoodsRating></GoodsRating>
          <!--店铺信息组件-->
          <ShopInfo></ShopInfo>
          <!--为你推荐商品或排行榜-->
          <GoodsRank></GoodsRank>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="div_id_GoodDetail">

      </mt-tab-container-item>
      <mt-tab-container-item id="div_id_GoodRating">
		  <RatingDetail></RatingDetail>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>
<script type="text/javascript">
  import GoodsInfo from './children/GoodsInfo'
  import GoodsDelivery from './children/GoodsDelivery'
  import GoodsRating from './children/GoodsRating'
  import ShopInfo from './children/ShopInfo'
  import GoodsRank from './children/GoodsRank'
  import PictureRotation from '../WUSICONG/PictureRotation'
  import RatingDetail from './RatingDetail'
  export default {
    components: {
      GoodsInfo,
      GoodsDelivery,
      GoodsRating,
      ShopInfo,
      GoodsRank,
      PictureRotation,
      RatingDetail
    },
    data() {
      return {
        selected: 'div_id_Good',
      }
    },
    mounted() {

    },
    methods: {

    },
  }

</script>
<style lang='scss'>
  .div_class_NavBar{
    display: flex;
    align-items: center;
    z-index: 2;
    i{
      width: 2.5rem;
    }
  }
  .div_class_ShopDetail {
    width: 100%;
    .div_class_ShopContent {
      width: 96%;
      margin: auto;
    }
  }

</style>
