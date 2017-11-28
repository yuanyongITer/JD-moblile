<template>
    <div class='div_class_ShopDetail'>
        <!--顶部-->
        <mt-navbar class="div_class_NavBar" v-model="selected" >
            <i class="iconfont icon-left-copy" @click="goBack()"></i>
            <mt-tab-item id="div_id_Good">商品</mt-tab-item>
            <mt-tab-item id="div_id_GoodDetail">详情</mt-tab-item>
            <mt-tab-item id="div_id_GoodRating">评价</mt-tab-item>
            <i class="iconfont icon-gengduo"></i>
        </mt-navbar>
        <div class="all_class_Border1px"></div>
        <!-- tabcontainer -->
        <mt-tab-container v-model="selected" class="div_class_Container">
            <mt-tab-container-item id="div_id_Good">
                <!--轮播图-->
                <PictureRotation></PictureRotation>
                <div class="div_class_ShopContent">
                    <!--商品信息-->
                    <GoodsInfo></GoodsInfo>
                    <!--商品规格及配送-->
                    <GoodsDelivery></GoodsDelivery>
                    <!--商品评价-->
                    <GoodsRating @returnTabID="getTabID"></GoodsRating>
                    <!--店铺信息组件-->
                    <ShopInfo></ShopInfo>
                    <!--为你推荐商品或排行榜-->
                    <GoodsRank></GoodsRank>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="div_id_GoodDetail">
                <GoodsDetail></GoodsDetail>
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
    import GoodsDetail from '../WUSICONG/GoodsDetail'
    import RatingDetail from './RatingDetail'
    export default {
        components: {
            GoodsInfo,
            GoodsDelivery,
            GoodsRating,
            ShopInfo,
            GoodsRank,
            PictureRotation,
            RatingDetail,
            GoodsDetail
        },
        data() {
            return {
                selected: 'div_id_Good',
            }
        },
        mounted() {

        },
        methods: {
            goBack(){
                this.$router.push('/demo');
            },
            getTabID(ID){
                this.selected = ID;
            }
        },
    }

</script>
<style lang='scss'>
    @import '../../assets/css/Common.scss';
    .div_class_ShopDetail {
        width: 100%;
        .div_class_ShopContent {
            background: $gcolorBgGray;
            /*width: 96%;*/
            margin: auto;
        }
        .mint-navbar{
            .mint-tab-item{
                .mint-tab-item-label{
                    font-size: $gfontsizeNormal;
                }
            }
            .is-selected{
                margin-bottom: -2px;
                border-bottom: 2px solid #000;
                color: #000;
                .mint-tab-item-label{
                    font-size: 0.9rem;
                }
            }
        }
    }
    .div_class_NavBar{
        display: flex;
        align-items: center;
        z-index: 101 ;
        position: fixed;
        top: 0;
        width: 100%;
        i{
          width: 2.5rem;
        }
    }
    .div_class_Container{
        margin-top: 46px;
    }
</style>