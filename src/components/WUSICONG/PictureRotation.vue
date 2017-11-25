<template>
	<div class="div_class_bigAll">
		<!-- <div class="div_class_pagination">{{message}}/{{sumMessage}}</div> -->
		<slider :pages="pages" :sliderinit="sliderinit" class="slider_class_slider" @slide="slide">
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
				//图片列表[arr]
				pages: [{
						style: {
							'backgroundImage': 'url(static/img1.jpg)'
						}
					},{
						style: {
							'backgroundImage': 'url(static/img2.jpg)'
						}
					},{
						style: {
							'backgroundImage': 'url(static/img1.jpg)'
						},
					},{
						style: {
							'backgroundImage': 'url(static/img2.jpg)'
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

		},
		methods: {
			slide(data) {
				this.message = data.currentPage + 1;
			}
		}
	}
</script>
<style scoped>
	.div_class_bigAll {
		display: flex;
		width: 100%;
		margin: 0;
		height: 20rem;
		padding: 0;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		position: relative;
		flex-wrap: wrap;
	}
	
	.slider_class_slider {
		opacity: 1;
		width: 100%;
		position: absolute;
		margin: 0px;
		padding: 0px;
		height: 20rem;
	}
	
	.div_class_pagination {
		display: flex;
		position: relative;
		width: 2.5rem;
		border-radius: 3rem;
		border-width: 1px solid #B3B3B3;
		align-self: flex-end;
		justify-content: center;
		margin-top: 18rem;
		z-index: 100;
		color: white;
		background-color:#B3B3B3;
	}
</style>