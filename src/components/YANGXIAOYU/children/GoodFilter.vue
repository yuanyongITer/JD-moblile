jiy
<!--
  筛选自动化测试
  @author:yxy
  @date:2017/11//27
-->
<template>
  <div class="div_class_GoodFilter">
    <!-- 颜色 -->
    <div class="div_class_GoodChoice" v-for="gooditem in goodlist" :key="gooditem.id">
      <p class="p_class_Title">{{gooditem.name}}</p>
      <div class="div_class_Flow">
          <div class="div_class_Cart div_class_FlowCol "
            :class='{all_class_Cliked_Red:subitem.subname == subitem.value}'
            v-for="subitem in gooditem.submennu" :key="subitem.subid"
            @click = 'getgoodChoose(subitem)'
            >
            {{subitem.subname}}
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
  export default {
    data() {
      return {
        goodlist: [{
            id: '0',
            name: '配送至',
            submennu: [{
              subid: '00',
              subname: '京东配送',
              value:'',
            }, {
              subid: '01',
              subname: '京尊达',
               value:'',
            }, {
              subid: '02',
              subname: '货到付款',
              value:'',
            }, {
              subid: '03',
              subname: '仅看有货',
              value:'',
            }]
          }, {
            id: '1',
            name: '价格区间',
            submennu: [{
              subid: '10',
              subname: '459-1319',
              value:'',
            }, {
              subid: '11',
              subname: '236-44',
              value:'',
            }, {
              subid: '12',
              subname: '335-565',
              value:'',
            }, {
              subid: '13',
              subname: '456-879',
              value:'',
            }]
          }, {
            id: '2',
            name: '品牌',
            submennu: [{
              subid: '20',
              subname: '华硕',
              value:'',
            }, {
              subid: '21',
              subname: '技嘉',
              value:'',
            }, {
              subid: '22',
              subname: '七彩虹',
              value:'',
            }]
          }, {
            id: '3',
            name: 'NIVDA芯片',
            submennu: [{
              subid: '30',
              subname: 'GT730',
              value:'',
            }, {
              subid: '31',
              subname: 'GTX750',
              value:'',
            }, {
              subid: '32',
              subname: 'GT1030',
              value:'',
            }]
          },

        ]
      }
    },
    methods:{
      getgoodChoose(data){
        axios.get('  https://easy-mock.com/mock/5a1bf55b74e00f187e2d4620/skydotMobile/goodchoose')
        .then(response =>{
          console.log(response.data);
        })
        if(data.value ==''){
          data.value = data.subname
        }else{
          data.value = '';
        }
      }
    }
  }

</script>
<style lang="scss">
  @import '../../../assets/css/Util.scss';
  .div_class_Cart {
    padding: 0.3rem 0;
    border-radius: 0.2rem;
    text-align: center;
    border: 1px solid $gcolorGrayLight-2;
  }
  .all_class_Cliked_Red {
     @include setHighLight(1px);
  }
</style>
