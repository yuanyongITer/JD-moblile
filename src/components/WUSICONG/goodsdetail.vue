<template>
  <div class="all_class_flex">
  	<div class="first_class_flex">
  		<div class='firstDiv_class_oneTab' v-bind:class="{'active':oneActive}">商品介绍</div>
  		<div class="firstDiv_class_midTab" v-bind:class="{'active':twoActive}">规格参数</div>
  		<div class='firstDiv_class_secondTab'v-bind:style="{'active':threeActive}">包装售后</div>
  	</div>
  </div>
</template>
<script>
	export default{
		data() {
			return{
				oneActive:false,
				twoActive:false,
				threeActive:false,
			}
		},
		mounted() {
			this.oneActive = true;
		},
	}
</script>
<style scoped>
	.all_class_flex
	{
		display: flex;
		flex-direction: column;
	}
	.first_class_flex 
	{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content:stretch;
		flex-grow: 1;
		padding: 0.5rem 0 0.5rem 0;
	}
	.firstDiv_class_oneTab{
		margin-left: 2rem;
	}
	.firstDiv_class_secondTab{
		margin-right: 2rem;
	}
	.firstDiv_class_midTab{
	}
	.active{
		color: red;
	}
</style>