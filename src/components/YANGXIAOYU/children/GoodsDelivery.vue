<!--
组件名：配送信息组件
功能点：显示配送信息
      +点击省略号弹出PopUP供用户修改信息
-->
<template>
  <div class="goodsdelivery">
    <div class="Grid">
      <div class="Grid-cell u-1of8 title">
          送至
      </div>
      <div class="Grid-cell center">
          <p class='Grid-row'>
              <i class="iconfont icon-weibiaoti-"></i>
              <span>成都市锦江区城区115号</span>
          </p>
          <p class='Grid-row'>
              <span class="red">现货</span>
              <span>, 15:00前下单，可预约今晚送达</span>
          </p>
      </div>
      <div class="Grid-cell u-1of8 red">
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
.icon-weibiaoti-{
  color: red;
}
.Grid-row{
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}


</style>
