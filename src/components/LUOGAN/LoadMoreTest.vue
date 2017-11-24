<template>  
	<div id="load">
		<div v-infinite-scroll="loadMore" :infinite-scroll-disabled="loading" infinite-scroll-distance="10">
			<div v-for="item in DataList" class="block">{{item}}</div>
		</div>
		<div v-if="loading">
			<mt-spinner type="fading-circle" color="#26a2ff"></mt-spinner>
		</div>
		<div v-if="allLoad" class="Nomore">
			暂无更多数据
		</div>
	</div>  
</template>
<script>    
	export default({
		name:'load',
		data() {
			return{
				index:0,
				DataList:[],
				loading:false,
				allLoad:false,
				bottomStatus:'',
				allLoaded:false
			}
		},
		created(){
			this.loadData();
		},
		methods:{
			loadMore() {
				let _this = this;
				if(_this.allLoad){
					return;
				}
			    _this.loading = true;
				setTimeout(() => {
				  	if(_this.index === 100){
				  		_this.loading = false;
				  		_this.allLoad = true;
				  		return;
				  	} else {
				    	_this.loadData();
				  	}
				    _this.loading = false;
				}, 2000);
			},
	      	loadData(){
	      		for(let i=0;i<10;i++){
	      			this.index ++;
	      			this.DataList.push(this.index);
	      		}
      		}
		}
	})
</script>
<style scoped>
	.block{
		width: 100%;
		height: 30px;
		text-align: center;
		background: #ccc;
		margin: 10px auto;
	}
	.Nomore{
		text-align: center;
	}
</style>  