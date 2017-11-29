/**
 *  商品筛选基类demo
 *  @author:yxy
 *  @date:2017/11/29
 */

 /**
  * ChooseList 基类
	包含两个子类：
		1. 商品规格[每栏单选]	SingleOutChoose
		2. 商品筛选[每栏可多选 最多选5个] MultiChoose
	//公共属性 ：
	@param :
		goodchooseList //从远程获取到的列表数据  最多三级菜单
		chosedList //已选择的 用于提交给后台 包括选择的name
			子类1. 用于已选	请求的时候： ?type = XX&&?name =XX
			子类2. 用于最后汇总统计  请求的时候?type = XXX||XX||XXX&&?color = XXX||XXX
				[=>展示时可使用页面循环的方式
			所以数据结构应该是：
			chosedList = [{
				'title':color, //父级的name 如颜色 规格等
				'data'[红色]	//这个属性后期也可以换成id 为了便于只管理解我先用name
			},{
				'title':type,
				'data':[16GB,256GB] //多选的情况
			}]
  *
  */
var GoodFilter = function(){

};

GoodFilter.prototype = {

}
