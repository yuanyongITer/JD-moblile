<template>
	<div>
		<!-- navbar -->
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">商品介绍</mt-tab-item>
			<mt-tab-item id="2">规格参数</mt-tab-item>
			<mt-tab-item id="3">包装售后</mt-tab-item>
		</mt-navbar>
		<!-- tabcontainer -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="firstPage_class_flex">
					<div class="div_class_saleServiceFloor ">
						<div class="div_class_saleServiceTitle">
							<span class="div_class_titleText">商品信息</span>
						</div>
						<div class="div_class_saleServiceImage">
							<img src="imgSrcOne">
						</div>
					</div>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<div class="div_class_siftMessage">
					<div class="div_class_movepadding">
						<div class="div_class_spanBorderBottom">
							<span class="span_class_firstFormat">商品信息</span>
							<span class="span_class_leftBorder">{{GoodsCode}}</span>
						</div>
						<div v-for="item in GoodsFormat" class="div_class_GoodsFormat">
							<div class="div_class_StrongTitle">{{item.StrongTitle}}</div>
							<div class="div_class_spanBorderBottom" v-for="items in item.list">
								<span class="span_class_firstFormat">{{items.firstFormat}}</span>
								<span class="span_class_leftBorder">{{items.lastFormat}}</span>
							</div>
						</div>
					</div>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<div class="div_class_saleServiceFloor bdr-t" v-for="item in GoodsLaterInformation">
					<div class="div_class_saleServiceTitle">
						<span class="div_class_titleText">{{item.GoodsLater}}</span>
					</div>
					<div class="div_class_saleServiceContent">{{item.GoodsContent}}</div>
				</div>
				<div class="div_class_saleServiceLast">没有更多了</div>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				GoodsCode: "R3231",
				selected: '1',
				imgeSrcOne: '',
				GoodsLaterInformation: [{
						GoodsLater: '包装清单',
						GoodsContent: '12132131'
					},
					{
						GoodsLater: '售后服务',
						GoodsContent: '12132131'
					},
					{
						GoodsLater: '价格说明',
						GoodsContent: '12132131'
					},
				],
				GoodsFormat: [{
					StrongTitle: '存储',
					list: [{
						firstFormat: 'ROM',
						lastFormat: '32G',
					}, {
						firstFormat: 'RAM',
						lastFormat: '4G',
					}, {
						firstFormat: '最大储存(rem)',
						lastFormat: '256GB',
					}]
				}, {
					StrongTitle: '存储',
					list: [{
						firstFormat: 'ROM',
						lastFormat: '32G',
					}, {
						firstFormat: 'RAM',
						lastFormat: '4G',
					}, {
						firstFormat: '最大储存容量',
						lastFormat: '256GB',
					}]
				}]
			}
		},
	}
</script>
<style scoped>
	.first_class_flex {
		display: flex;
		flex-direction: column;
		align-content: center;
		padding: 0;
		margin: 0;
	}
	
	.div_class_flex {
		display: flex;
		justify-content: space-between;
	}
	
	.div_class_image {
		background-image: url('/static/img1.jpg');
	}
	
	.mint-navbar .mint-tab-item.is-selected {
		border-bottom: hidden;
		color: #FF0000;
	}
	
	.div_class_saleServiceFloor {
		padding: 14px 15px;
		background-color: #fff;
		color: #868489;
		font-size: 12px;
		line-height: 16px;
	}
	
	.div_class_saleServiceTitle {
		text-align: center;
		position: relative;
	}
	
	.div_class_saleServiceTitle::after {
		content: "";
		height: 1px;
		width: 100%;
		position: absolute;
		top: 50%;
		left: 0;
		background-color: #d7d7d7;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
	}
	
	.div_class_saleServiceImage {
		height: 100%;
	}
	
	.div_class_saleServiceTitle .div_class_titleText {
		z-index: 10;
		position: relative;
		background-color: #fff;
		padding: 0 16px;
	}
	
	.sale-service-wrap {
		margin: 0;
		padding: 0;
	}
	
	.detail {
		position: relative;
		padding: 5px 0;
		font-size: .75em;
		color: #5a5a5a;
		overflow: hidden;
		height: 100%;
		margin: 0 10px 12px 10px;
	}
	
	.div_class_movepadding {
		display: flex;
		flex-direction: column;
		border: 2px solid antiquewhite;
		margin: 10px;
		margin-bottom: 0px;
		height: 100%;
		border-bottom: none;
	}
	
	.div_class_saleServiceContent {
		margin-top: 10px;
	}
	
	.div_class_saleServiceLast {
		margin-top: 5rem;
		display: block;
		text-align: center;
		font-family: "微软雅黑";
	}
	
	.div_class_siftMessage {
		height: 100%;
		background-color: #fff;
		padding: 0;
		margin: 0;
		font-size: 16px;
	}
	
	.span_class_leftBorder {
		border-left: 2px solid antiquewhite;
		padding-left: 10px;
		width: auto;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.div_class_spanBorderBottom {
		border-bottom: 2px solid antiquewhite;
		height: 3rem;
		align-content: center;
		justify-content: flex-start;
		align-items: center;
		display: flex;
		width: auto;
	}
	
	.span_class_firstFormat {
		text-align: center;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 10rem;
		height: 100%;
		align-content: center;
		padding-left: 0.8rem;
	}
	
	.div_class_StrongTitle {
		border-bottom: 2px solid antiquewhite;
		padding-left: 0.8rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-content: center;
		align-items: center;
		height: 3rem;
	}
	
	.div_class_GoodsFormat {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>