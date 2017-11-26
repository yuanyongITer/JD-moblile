<template>
	<div class="div_class_goodsRotation">
		 <div class="div_class_pagination">{{message}}/{{sumMessage}}</div> 
		<slider :pages="pages" :sliderinit="sliderinit" class="slider_class_slider" @slide="slide" id="size">
		</slider>
	</div>
</template>

<script>
	import slider from 'vue-concise-slider' // 引入slider组件
	export default {
		components: {
			slider
		},
		data() {
			return {
				
				pages: [{
						style: {
							'backgroundImage': 'url(static/img1.jpg)',
							'backgroundSize':'80% !important',
							'backgroundRepeat':'no-repeat'
							
						}
					},{
						style: {
							'backgroundImage': 'url(static/img1.jpg)',
							'backgroundSize':'100%'
							
						}
					},{
						style: {
							'backgroundImage': 'url(static/img1.jpg)',
							'backgroundSize':'100%'
							 
						}
					},{
						style: {
							'backgroundImage': 'url(static/img1.jpg)',
							'backgroundSize':'100%'
							
						}
					}
				],
				//滑动配置[obj]
				sliderinit: {
					currentPage: 0, //当前页码
					thresholdDistance: 100, //滑动判定距离
					thresholdTime: 300, //滑动判定时间
					loop: false, //循环滚动
					infinite: 1, //无限滚动前后遍历数
					slidesToScroll: 1, //每次滑动项数
				},
				message: '',
				sumMessage: '',
			}
		},
		mounted() {
			this.sumMessage = this.pages.length;
			this.message = this.sliderinit.currentPage + 1;
            if(document.getElementById('size').style.height>2054)
            {
            	document.getElementById('size').style.height=2054;
            }
		},
		methods: {
			slide(data) {
				this.message = data.currentPage + 1;
			}
		}
	}
</script>
<style scoped>
	.div_class_goodsRotation {
		display: flex;
		width: 100%;
		margin: 0;
		height: 20rem;
		align-items: center;
		justify-content: center;
		margin-top:46px;
	}
	
	/*.slider_class_slider {
		opacity: 1;
		width: 100%;
		margin: 0px;
		height: 20rem;
		align-self:center;
		padding:0px;
	}*/
	.div_class_pagination {
		position: absolute;
		width: 2.5rem;
		border-radius: 3rem;
		border-width: 1px solid #B3B3B3;
		justify-content: center;
		color: white;
		background-color:#B3B3B3;
		z-index: 2;
		align-self:center;
		display: flex;
		margin-top: 9rem;
	}
	.slider-container{
		position: static;
		z-index: 0;
	}
	/*.slider-item {
		background-position: 50% !important;
        background-size: 80% !important;
        background-repeat: no-repeat;
        background-attachment: fixed;
	}*/
	.slider-container{
		max-height:320px;
		height: 100%;
		max-width: 400px;
	}
</style>