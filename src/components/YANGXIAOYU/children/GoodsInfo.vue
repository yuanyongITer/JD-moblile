<!--
组件名：商品信息组件
功能点：显示商品的信息，价格，优惠
-->
<template>
  <div>
    <div class='shopinfo'>
        <mt-cell>
            <i class="iconfont icon-ziying"></i>
            <span class='info'>荣耀V9 全网通 高配版 6GB+64GB 极光蓝 移动联通电信4G手机 双卡双待</span>
            <div class = 'follow'>
                <i class="iconfont icon-guanzhu"></i>
            </div>
        </mt-cell>
    </div>
    <div class="advertisement">
        <span>领券立减200！低至2499！纤薄机身，2K屏,双镜头,强劲芯片,你想要的快~荣耀爆款立省700！选品质，购荣耀>>>>></span>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang='scss'>
.shopinfo{
    .icon-ziying {
        color:#fff;
        background: red;
        border: 1px solid red;
    }
    .info{
        font-size:0.8em;
        padding:0  5px;
    }
    .follow{
        .icon-guanzhu{
            color: red;
        }
    }
}
.advertisement{
    color: red;
    font-size:0.8em;
}
</style>

