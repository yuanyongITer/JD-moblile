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
              <p class="all_class_OverflowHidden"><i class="iconfont icon-weibiaoti- all_class_Hightlight_Red"></i>成都市锦江区城区115号成都市锦江区城区115号成都市锦江区城区115号</p>
          </p>
          <p>
              <span class="all_class_Hightlight_Red">现货</span>
              <span>, 15:00前下单，可预约今晚送达</span>
          </p>
      </div>
      <div class=" div_class_GridCol_Col6 all_class_Hightlight_Red">
             <i class="iconfont icon-gengduo" @click="handleClick"></i>
      </div>
    </div>
    <mt-popup v-model="popupVisible" position="bottom" class="popup">
         
    </mt-popup>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg:'组件',
      popupVisible:false,
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    }
  },
  methods: {
    handleClick: function() {
        this.popupVisible = true
        }
    }
}
</script>
<style lang="scss">

.all_class_OverflowHidden{
  width: 15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
