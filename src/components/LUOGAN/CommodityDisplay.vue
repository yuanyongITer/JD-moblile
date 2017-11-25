<template>
	<div>
		<div v-if="isDouble" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" class="div_classBackgroundColor">
			<div class="div_classDoubleLeft">
				<img src="../../assets/Lg_img/iphone8.jpg" class="img_classDouble">
				<div class="div_classText">
					<p class="p_classDoubleSize">Apple iPhone 8 Plus(A1864) 64GB 金色 移动联通电信4G手机 两周超长待机 开辟手机新时代</p>
					<span class="span_classMark">¥</span><span class="span_classValue">6688</span><span class="span_classShow">赠</span>
					<p class="p_classDoubleSize">
						<span class="span_classStop">自营</span><span class="span_classAppraise">272306条评价</span><span class="span_classData">99%好评</span>
					</p>
				</div>
			</div>
			<div class="div_classDoubleRight">
				<img src="../../assets/Lg_img/iphone8.jpg" class="img_classDouble">
				<div class="div_classText">
					<p class="p_classDoubleSize">Apple iPhone 8 Plus(A1864) 64GB 金色 移动联通电信4G手机 两周超长待机 开辟手机新时代</p>
					<span class="span_classMark">¥</span><span class="span_classValue">6688</span><span class="span_classShow">赠</span>
					<p class="p_classDoubleSize">
						<span class="span_classStop">自营</span><span class="span_classAppraise">272306条评价</span><span class="span_classData">99%好评</span>
					</p>
				</div>
			</div>
			<div class="div_classDoubleLeft">
				<img src="../../assets/Lg_img/iphone8.jpg" class="img_classDouble">
				<div class="div_classText">
					<p class="p_classDoubleSize">Apple iPhone 8 Plus(A1864) 64GB 金色 移动联通电信4G手机 两周超长待机 开辟手机新时代</p>
					<span class="span_classMark">¥</span><span class="span_classValue">6688</span><span class="span_classShow">赠</span>
					<p class="p_classDoubleSize">
						<span class="span_classStop">自营</span><span class="span_classAppraise">272306条评价</span><span class="span_classData">99%好评</span>
					</p>
				</div>
			</div>
			<div class="div_classDoubleRight">
				<img src="../../assets/Lg_img/iphone8.jpg" class="img_classDouble">
				<div class="div_classText">
					<p class="p_classDoubleSize">Apple iPhone 8 Plus(A1864) 64GB 金色 移动联通电信4G手机 两周超长待机 开辟手机新时代</p>
					<span class="span_classMark">¥</span><span class="span_classValue">6688</span><span class="span_classShow">赠</span>
					<p class="p_classDoubleSize">
						<span class="span_classStop">自营</span><span class="span_classAppraise">272306条评价</span><span class="span_classData">99%好评</span>
					</p>
				</div>
			</div>
		</div>
		<div v-else>
			<div>
				<div class="div_classSingleLeft">
					<img src="../../assets/Lg_img/iphone8.jpg" class="img_classSingle">
				</div>
				<div class="div_classSingleRight">
					<p class="p_classSize">Apple iPhone 8 Plus(A1864) 64GB 金色 移动联通电信4G手机 两周超长待机 开辟手机新时代</p>
					<div class="div_classMarginTop">
						<span class="span_classMark">¥</span><span class="span_classValue">6688</span><span class="span_classShow">赠</span>
					</div>
					<div class="div_classMarginTop">
						<p class="p_classDoubleSize">
							<span class="span_classStop">自营</span><span class="span_classAppraise">272306条评价</span><span class="span_classData">99%好评</span>
						</p>
					</div>
				</div>
			</div>
			<div>
				<div class="div_classSingleLeft">
					<img src="../../assets/Lg_img/iphone8.jpg" class="img_classSingle">
				</div>
				<div class="div_classSingleRight">
					<p class="p_classSize">Apple iPhone 8 Plus(A1864) 64GB 金色 移动联通电信4G手机 两周超长待机 开辟手机新时代</p>
					<div class="div_classMarginTop">
						<span class="span_classMark">¥</span><span class="span_classValue">6688</span><span class="span_classShow">赠</span>
					</div>
					<div class="div_classMarginTop">
						<p class="p_classDoubleSize">
							<span class="span_classStop">自营</span><span class="span_classAppraise">272306条评价</span><span class="span_classData">99%好评</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				isDouble:false,
				loading:false,
			}
		},
		mounted(){
		},
		methods:{
		},
	}
</script>
<style scoped lang = 'scss'>
	$hightlightcolor:red;
    $fontsize:0.8rem;
    $infocolor:#a7a7a2;
	.div_classBackgroundColor{
		background-color:#fafafa;
		height: 700px;
	}
	.div_classDoubleLeft{
		flex: none;
		display: flex;
		flex-direction: column;
		width: 49.5%;
		float: left;
		display: inline;
		margin-top:0.2rem;
		background-color:white;
	}
	.div_classDoubleRight{
		flex: none;
		display: flex;
		flex-direction: column;
		width: 49.5%;
		float: right;
		display: inline;
		margin-top:0.2rem;
		background-color:white;
	}
	.div_classSingleLeft{
		flex: none;
		width: 30%;
		margin-top:0.2rem;
		background-color:white;
	}
	.div_classSingleRight{
		flex: none;
		width: 70%;
		float: right;
		margin-top:0.2rem;
		background-color:white;
	}
	.p_classDoubleSize{
		font-size: $fontsize;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.div_classMarginTop{
		margin-top: 0.2rem;
	}
	.img_classDouble{
		width: 100%;
	}
	.img_classSingle{
		width: 100%;
		float: left;
		display: inline;
	}
	.div_classText{
		padding: 0.6rem;
	}
	.p_classSize{
		font-size: $fontsize;
		display: -webkit-box; 
		-webkit-box-orient: vertical;
		-webkit-line-clamp:2;
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
		margin-bottom: 0.8rem;
	}
	.span_classMark{
		font-size: $fontsize;
		color: $hightlightcolor;
	}
	.span_classValue{
		font-size: 1.0rem;
		margin-left: 0.2rem; 
		color: $hightlightcolor;
	}
	.span_classShow{
		margin-left : 0.3rem;
		padding: 0.05rem;
		color: white;
		background-color: $hightlightcolor;
		font-size: 0.7rem;
		border-radius: 0.1rem;
	}
	.span_classStop{
		font-size: 0.6rem;
		margin-right: 0.4rem;
		padding-right: 0.05rem;
		padding-left: 0.05rem;
		border: 1px solid $hightlightcolor;
		color: $hightlightcolor; 
	}
	.span_classAppraise{
		font-size: 0.6rem;
		color:$infocolor;
		margin-right: 0.45rem; 
	}
	.span_classData{
		font-size: 0.6rem;
		color: $infocolor;
	}
</style>