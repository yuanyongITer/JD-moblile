<template>
    <div class="div_class_Swipe">
        <swipe class="slideContainer" :infinity="flag" v-model="index">
            <swipe-item v-for="(item,index) in pics" :key="index">
                <img :src="item.src">
            </swipe-item>
        </swipe>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                index: 0,
                item: 4,
                flag: false,
                pics:[{
                        src:'static/img1.jpg'
                    },{
                        src:'static/img1.jpg'
                    },{
                        src:'static/img1.jpg'
                }]
            };
        },
        mounted() {
        
        }
    }
</script>

<style scoped>
    .slideContainer{
        text-align: center;
        font-size: 24px;
        width: 100%;
        height: 100%;
    }
    img{
        width: 100%;
        height: 100%;
        margin: auto;
    }
</style>
