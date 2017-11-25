<!--
组件名：为你推荐商品或排行榜
功能点：采用Tab的展示形式
-->
<template>
  <div class="div_class_GoodsRank">
    <mt-navbar v-model="selected">  
      <mt-tab-item id="div_id_Recommend">为你推荐</mt-tab-item>  
      <mt-tab-item id="div_id_Rank">排行榜</mt-tab-item>  
    </mt-navbar>  
    <!-- tabcontainer -->  
    <mt-tab-container v-model="selected">  
      <mt-tab-container-item id="div_id_Recommend">  
         <div class="div_class_Grid">
            <div class=" div_class_GridCol_Col33 " v-for="n in 6" :key="n">
              <img src="../assets/img/good.jpg">
              <p class="p_class_Intro">华为(HUAWEI)荣耀V9手机 极光蓝 移动联通电信4G手机 双卡双待</p>
              <p class="p_class_Money">￥2688.00</p>
            </div>
          </div>
      </mt-tab-container-item>  
      <mt-tab-container-item id="div_id_Rank">  
          <div class="div_class_Grid">
            <div class=" div_class_GridCol_Col33 " v-for="n in 4" :key="n">
              <img src="../assets/img/good.jpg">
              <p class="p_class_Intro">华为(HUAWEI)荣耀V9手机 极光蓝 移动联通电信4G手机 双卡双待</p>
              <p class="p_class_Money">￥2688.00</p>
            </div>
          </div>
      </mt-tab-container-item>  
    </mt-tab-container>  
  </div>
</template>
<script>
  export default {
      data(){
          return {
              selected: 'div_id_Recommend',
          }
      }
  }

</script>
<style lang="scss">
  $fontsize:0.8rem;
.div_class_GoodsRank{
    margin-top: 0.5rem;
    .div_class_Grid{
        flex-wrap:wrap;
        display: flex;
        text-align: center;
        img{
            width: 60px;
            height:80px;
        }
    }
    .p_class_Money{
        font-weight: bold;
    }
    .p_class_Intro{
        font-size: $fontsize - 0.2rem ;
        overflow: hidden;
        text-overflow: -o-ellipsis-lastline;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
}

</style>
