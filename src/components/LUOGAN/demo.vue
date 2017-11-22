<template>
	<div>
		<mt-button type="primary" @click.native = "a">筛选</mt-button>
		<mt-popup v-model="popupVisible" position="right" id="size">1
		</mt-popup>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				popupVisible:false,
				selected:"",
			}
		},
		mounted(){
			let height = document.documentElement.clientHeight;
			let width = document.documentElement.clientWidth - 80;
			document.getElementById('size').style.width = width + "px";
			document.getElementById('size').style.height = height + "px";
		},
		methods:{
			a(){
				this.popupVisible = true;
			}
		},
	}
</script>