<!--
组件名：商品规格及配送信息组件
功能点：显示商品规格及配送信息
      +点击省略号弹出PopUP供用户修改信息
-->
<template>
  <div class="goodsdelivery">
    <mt-cell title="送至">
      <span class='destination'>
        <p>
          <i class="iconfont icon-weibiaoti-"></i>
          <span>成都市锦江区城区115号</span>
        </p>
        <p>
          <span class="red">现货</span>
          <span>15:00前下单，可预约今晚送达</span>
        </p>
      </span>
      <i class="iconfont icon-gengduo" @click="handleClick"></i>
    </mt-cell>
    <mt-popup v-model="popupVisible" position="bottom">
          <div class="header">
                <span class="left"></span>
                <span class="right">
                      <p class="money">￥2699.00</p>
                      <p>商品编号:4461470</p>
                </span>
          </div>
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
  .goodsdelivery {
    margin: auto;
    width: 100%;
    .destination {
      margin-right: 40px;
      font-size: 0.8em;
      .icon-weibiaoti- {
        color: red;
      }
      p {
        margin-top: 2px;
      }
      .red {
        color: red;
      }
    }
  }
.header{
      width: 100%;
      .left{
            width: 40%;
            height: 50px;
            background: red;
      }
      .right{
            width: 60%;
            .money{
                  color: red;
            }
      }
}
</style>
