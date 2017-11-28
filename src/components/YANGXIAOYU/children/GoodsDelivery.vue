<!--
组件名：配送信息组件
功能点：显示配送信息
      +点击省略号弹出PopUP供用户修改信息
-->
<template>
  <div class="div_class_GoodsDelivery">
    <div class="div_class_Grid">
      <div class=" div_class_GridCol_Col6 div_class_Rowhead">
        送至
      </div>
      <div class=" div_class_GridCol_Colcenter">
        <p>
          <p class="all_class_OverflowHidden">
            <i class="iconfont icon-weibiaoti- all_class_Hightlight_Red"></i>成都市锦江区城区115号成都市锦江区城区115号成都市锦江区城区115号</p>
        </p>
        <p>
          <span class="all_class_Hightlight_Red">现货</span>
          <span>, 15:00前下单，预计今晚可送达</span>
        </p>
      </div>
      <div class=" div_class_GridCol_Col6 all_class_Hightlight_Red">
        <i class="iconfont icon-gengduo" @click="handleClick"></i>
      </div>
    </div>
    <mt-popup v-model="popupVisible" position="bottom" class="div_class_Popup">
      <div class="div_class_Grid">
        <div class="div_class_GridCol_Col100 p_class_Title">配送至</div>
      </div>
      <div class="all_class_Border1px"></div>
      <div class="all_class_Content">
        <div class="address" v-for="(addressitem,$index) in addressList" :key='addressitem'>
          <div class="div_class_Grid ":class='{all_class_clicked_noborder:$index == clickedAddressIndex}'
                :key='$index' @click="getAddressChoose($index)"
          >
              <div class="div_class_GridCol_Col6">
                <i class="iconfont icon-weibiaoti-"></i>
              </div>
              <div class=" div_class_GridCol_Colcenter">
                {{addressitem}}
              </div>
              <div class="div_class_GridCol_Col6">
                <span v-show="$index == clickedAddressIndex">√</span>
              </div>
          </div>
          <div class="all_class_Border1px"></div>
        </div>
      </div>
      <div class="all_class_Footer">
        <mt-button type="danger" class="div_class_FooterBtn">选择其他地址</mt-button>
      </div>
    </mt-popup>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: '组件',
        popupVisible: false,
        clickedAddressIndex:'0',
        addressList:[
          '广东省深圳市云海路卫家村黄沙区222号深圳市云海路卫家村黄沙区222号',
          '区卫家村黄沙区222广东省深',
          '区沙区222广东省深',
          '区222号深圳市圳市云海路卫家村黄沙号云海路卫家村黄沙区222广东省深',
        ]
      }
    },
    methods: {
      handleClick: function () {
        this.popupVisible = true
      },
      onValuesChange(picker, values) {
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
      },
      getAddressChoose(index){
        this.clickedAddressIndex = index;
      }
    }
  }

</script>
<style lang="scss">
  @import '../../../assets/css/Util.scss';
  @import '../../../assets/css/Common.scss';
  .all_class_OverflowHidden {
    @include setOverflowEllipsis(1);
  }
  .all_class_clicked_noborder{
     @include setHighLight(0);
  }
  .div_class_GoodsDelivery {
    background: #FFF;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #DDD;
    padding:0.5rem;
    .p_class_Title {
      text-align: center;
      color: $gcolorGrayLight-1;
      padding-bottom: 0.5rem;
    }
    .all_class_Content {
      width: 100%;
      .div_class_Grid{
        padding: 0.2rem;
        .div_class_GridCol_Colcenter{
          margin-top: 0.2rem;
        }
        i{
          margin-left:0.2rem;
        }
        span{
          font-size:$gfontsizeBig;
        }
      }
    }
  }

</style>
