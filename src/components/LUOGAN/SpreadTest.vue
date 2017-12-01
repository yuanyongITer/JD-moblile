<template>
    <div class="div_class_Popup">
        <div class="div_class_conditon">
            <div v-for="(item,index) in dataList" :key="index">
                <div class="div_class_Grid"  style="justify-content:space-between;">
                    <div class="div_class_GridCol_Col33">{{item.name}}</div>
                    <div class="div_class_GridCol_Col20" @click="MoreColor(item.isSpread,index)">全部</div>
                </div>
                <div class="div_class_Flow" :id=item.id>
                    <div class="div_class_FlowCol" :class='{all_class_Cliked_Red:list.value == list.subid}' v-for="(list,e) in item.submennu"  :key="e" @click="choosed(list,index,e)">{{list.subname}}</div>
                </div>
            </div>
        </div>
        <div class="div_class_Grid bottomBtn">
            <div class="div_class_GridCol_Col45 bottomBtnRest">
                重置
            </div>
            <div class="div_class_GridCol_Col45 bottomBtnConfirm">
                确定
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import axios from 'axios'
    export default{
        data(){
            return{
                clickColor:'',
                dataList:[],
            }
        },
        mounted(){
            axios.get('https://easy-mock.com/mock/5a1bf55b74e00f187e2d4620/skydotMobile/goodfilter').then((data)=>{
                data.data.forEach((data)=>{
                    data.isSpread = 0;
                    data.array = [];
                    data.submennu.forEach((value)=>{
                        value.judge = 0;
                        value.value = "";
                    })
                });
                this.dataList = data.data;
                console.log(this.dataList)
            })
        },
        created(){

        },
        methods:{
            choosed(data,index,e){
                if(!data.judge){
                    if(index>0){
                        if(this.dataList[index].array.length>4){
                            return;
                        }
                        else{
                            data.judge = 1;
                            data.value = data.subid;
                            this.dataList[index].array.push(data);
                        }   
                    }
                } else {
                    data.judge = 0;
                    data.value = '';
                    let arr = this.dataList[index].array;
                    for(var i=0,len = arr.length;i<len;i++){
                        if(arr[i].subid == data.subid){
                            this.dataList[index].array.splice(i,1);
                            break;
                        }
                    }
                    console.log(this.dataList[index].array);
                }
            },   
            MoreColor(flag,index){
                let height = Math.ceil((this.dataList[index].submennu.length)/3);
                height = height * 30;
                this.dataList[index].isSpread = !flag;
                if(!flag){
                    document.getElementById(this.dataList[index].id).style.height = height+"px";
                    document.getElementById(this.dataList[index].id).overflow = "auto";
                } else {
                    document.getElementById(this.dataList[index].id).style.height = 28+"px";
                    document.getElementById(this.dataList[index].id).overflow = "hidden";
                }
            },
        }
  }
</script>
<style lang = 'scss' scoped>
    @import '../../assets/css/Util.scss';
    @import '../../assets/css/common.scss';
    .all_class_Cliked_Red{
        @include setHighLight(1px);
    }
    .div_class_Popup{
        @include setWH(100%,90%);
        display: flex;
        flex-direction: column;
    }
    .div_class_conditon{
        @include setWH(100%,100%);
        padding: 0rem 0.5rem;
        min-height: 10rem;
        overflow-y: scroll;
        overflow-x: hidden; //禁用横向滚动条
        flex: 1; //让底部栏永远在底部
        margin: auto;
    }
    
    .div_class_Flow{
        margin: 0.8rem auto;
        height: 30px;
        overflow: hidden;
        @include setFjustify(flex-start);
        flex-flow: row wrap;
        text-align: center;
        font-size: $gfontsizeNormal;
        .div_class_FlowCol{
            font-size: $gfontsizeMini;
            box-sizing: border-box;
            background: $gcolorBgGray;
            white-space: nowrap;
            flex: 0 0 30%;
            margin: 0.2rem;
            padding: 0.2rem  0.5rem ;
            border: 1px solid $gcolorBgGray;
            border-radius: 5px;
        }
    }
    .bottomBtn{
        position: fixed;
        bottom: 0;
        width: 100%;
        border-top: 1px solid $gcolorBgGray;
        font-size: $gfontsizeBig;
        .bottomBtnRest{
            padding: 1rem 0.5rem;
            background: #fff;
            text-align: center;
        }
        .bottomBtnConfirm{
            padding: 1rem 0.5rem;
            background: red;
            color: #fff;
            text-align: center;
        }
    }
</style>