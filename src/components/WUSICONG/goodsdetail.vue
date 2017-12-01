<template>
	<div>
		<!-- navbar -->
		<mt-navbar v-model="selected" class="div_class_common_style">
			<mt-tab-item id="1">商品介绍</mt-tab-item>
			<mt-tab-item id="2">规格参数</mt-tab-item>
			<mt-tab-item id="3">包装售后</mt-tab-item>
		</mt-navbar>
		<!-- tabcontainer -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="first_class_flex">
					<div class="div_class_firstPage_blank"></div>
					<div class="div_class_saleServiceFloor ">
						<div class="div_class_saleServiceTitle">
							<span class="div_class_titleText">商品信息</span>
						</div>
						<div class="div_class_saleServiceImage">
							<img src="../../../static/img1.jpg">
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
							<div class="div_class_StrongTitle"><strong>{{item.StrongTitle}}</strong></div>
							<div class="div_class_spanBorderBottom" v-for="items in item.list">
								<span class="span_class_firstFormat">{{items.firstFormat}}</span>
								<span class="span_class_leftBorder">{{items.lastFormat}}</span>
							</div>
						</div>
					</div>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<div v-for="item in GoodsLaterInformation">
					<div class="div_class_firstPage_blank"></div>
				<div class="div_class_saleServiceFloor" >
					<div class="div_class_saleServiceTitle">
						<span class="div_class_titleText">{{item.GoodsLater}}</span>
					</div>
					<div class="div_class_saleServiceContent">{{item.GoodsContent}}</div>
				</div></div>
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
				imgeSrcOne: '../../../static/img1.jpg',
				GoodsLaterInformation: [{
						GoodsLater: '包装清单',
						GoodsContent: '手机（含内置电池） X 1、5A大电流华为SuperCharge充电器X 1、5A USB数据线 X 1、半入耳式线控耳机 X 1、快速指南X 1、三包凭证 X 1、取卡针 X 1、保护壳 X 1'
					},
					{
						GoodsLater: '售后服务',
						GoodsContent: '本产品全国联保，享受三包服务，质保期为：一年质保如因质量问题或故障，凭厂商维修中心或特约维修点的质量检测证明，享受7日内退货，15日内换货，15日以上在质保期内享受免费保修等三包服务！售后服务电话：400-830-8300 品牌官方网站：https://www.huawei.com/cn/'
					},
					{
						GoodsLater: '价格说明',
						GoodsContent: '1、京东价：京东价为商品的销售价，是您最终决定是否购买商品的依据。2、划线价：商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在京东平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。3、折扣：如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。4、异常问题：商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询.'
					},
				],
				GoodsFormat: [{
					StrongTitle: '存储',
					list: [{
						firstFormat: 'ROM',
						lastFormat: '32G',
					}, {
						firstFormat: 'RAM',
						lastFormat: '6G',
					}, {
						firstFormat: '最大储存(rem)',
						lastFormat: '256GB',
					}]
				}, {
					StrongTitle: '基本信息',
					list: [{
						firstFormat: '机身长度（mm)',
						lastFormat: '150.5',
					}, {
						firstFormat: '机身宽度（mm)',
						lastFormat: '77.8',
					}, {
						firstFormat: '机身厚度',
						lastFormat: '8.2',
					}]
				}]
			}
		},
	}
</script>
<style lang="scss" scoped>
	@import '../../assets/css/Util.scss';
    @import '../../assets/css/Common.scss';
    @import '../../assets/css/minxi.scss';
    .div_class_common_style{
    	font-family:$gfontfamily;
    	font-size:1px;
    }
    /** navbar导航栏 **/
	.mint-navbar .mint-tab-item.is-selected {
		border-bottom: hidden;
		color: $gcolorHighlightRed;
	}
	
	/**商品介绍总样式**/
	.first_class_flex {
		display: flex;
		flex-direction: column;
		align-content: center;
		padding: 0;
		margin: 0;
	}
	/**头部灰色间隙**/
	.div_class_firstPage_blank{
		width: 100%;
		height: 5px;
        background-color:$gcolorBgGray;
	}
	/**商品介绍内容样式**/
	.div_class_saleServiceFloor {
		padding: 14px 15px;
		background-color: #fff;
		color: #868489;
		font-size:$gfontsizeSmall;
		line-height: 16px;
	}
	/**商品信息样式**/
	.div_class_saleServiceTitle {
		text-align: center;
		position: relative;
	}
	.div_class_saleServiceTitle .div_class_titleText {
		z-index: 10;
		position: relative;
		background-color: #fff;
		padding: 0 16px;
		font-family: $gfontfamily;
		color: $gcolorGray;
		font-size:$gfontsizeMini;
	}
	/**商品信息样式伪类**/
	.div_class_saleServiceTitle::after {
		content: "";
		height: 1px;
		width: 100%;
		position: absolute;
		top: 50%;
		left: 0;
		background-color: $gcolorGrayLight-2;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
	}
	 /** 商品图片样式 **/
	.div_class_saleServiceImage {
		height: 100%;
		text-align: center;
	}
	.all_class_Border1px{
   height:1px;
   background:transparent;
   -webkit-transform: scaleY(0.5);
   -webkit-transform-origin:0 0;
   overflow: hidden;}
   img{
		@include setWH(95%,auto);
		border: 0px solid $gcolorGrayLight-2;
	 }
	 .div_class_spanBorderBottom {
		border-bottom: 1px solid $gcolorGrayLight-2;
		height: auto;
		align-content: center;
		justify-content: flex-start;
		align-items: center;
		display: flex;
		width: auto;
	}
	/**规格参数总样式**/
	.div_class_siftMessage {
		height: 100%;
		background-color: #fff;
		padding: 0;
		margin: 0;
		font-size: $gfontsizeSmall;
		color: $gcolorGray;
	}
	/**规格参数内容**/
	.div_class_movepadding {
		display: flex;
		flex-direction: column;
		border: 1px solid $gcolorGrayLight-2;
		margin: 10px;
		margin-bottom: 0px;
		height: 100%;
		border-bottom: none;
	}
	/**商品信息和二级菜单**/
	.div_class_GoodsFormat {
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-family: $gfontfamily;
	}
	/**二级菜单左右内容**/
	
	.span_class_firstFormat {
		display: flex;
		justify-content: flex-start;
		align-items:center;
		width: 4rem;
		height: auto;
		align-content: flex-start;
		padding: 0.4rem;
		border-right: 1px solid $gcolorGrayLight-2;
	}
	.span_class_leftBorder {
		width: auto;
		height: auto;
		display: flex;
		align-items:center;
		justify-content:center;padding: 0.4rem;
	}
	/**一级菜单**/
	.div_class_StrongTitle {
		border-bottom: 1px solid $gcolorGrayLight-2;
		padding: 0.4rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-content:center;
		align-items:center;
		height: auto;
		color: #000000;
	}
	/**包装售后**/
	/**单个数据内容**/
	.div_class_saleServiceContent {
		margin-top: 10px;
		height: 100%;
		font-family: $gfontfamily;
		font-size: $gfontsizeSmall;
	}
	.div_class_flex {
		display: flex;
		justify-content: space-between;
	}
	/**没有更多了**/
	.div_class_saleServiceLast {
		margin-top: 5rem;
		display: block;
		text-align:center;
		font-family:$gfontfamily;
		font-size:$gfontsizeSmall;
	}
</style>