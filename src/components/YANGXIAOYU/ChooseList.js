import axios from 'axios'
/**
 *  商品筛选基类demo
 *  @author:yxy
 *  @date:2017/11/29
 */

/**
  * ChooseList 基类
	包含两个子类：
		1. 商品规格[每栏单选]	newSingle => 暂时与父类合并了
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
	@method:
		initData() //从远程获取数据
		getGoodChoose() //click事件
		getAllChosed() //收集获取到的数据
  *
  */

let basicUrl = 'https://easy-mock.com/mock/5a1bf55b74e00f187e2d4620/skydotMobile';
class ChooseList {
	constructor(props) {
		this.goodchooseList = new Object(),
			this.chosedList = new Array(),
			this.chosedServiceList = new Array(),
			Object.assign(this, props);
		return this;
	}
	//1. 初始化数据 => 从远程获取数据
	initData(url) {
		axios.get(basicUrl + url)
			.then(response => {
				response.data.forEach(element => {
					element.submennu.forEach(subelement => {
						subelement.value = ' ';
						//如果有三级菜单 /**********优化****/
						if (subelement.minmennu != undefined) {
							subelement.minmennu.forEach(minelement => {
								minelement.value = ' ';
							})
						}
					});
				})
				this.goodchooseList = response.data;
			})
	}
	//2. click事件 控制元素的选中与取消选中
	getGoodChoose(subdata, data, menuname, idname, alldata) {
		//每次点击先清空 然后赋值
		data[menuname].forEach(item => {
			//置空除被点击元素以外同栏的其他元素
			if (item[idname] != subdata[idname]) {
				item.value = ' ';
			}
		})
		//判断当前元素是否是高亮状态
		if (subdata.value == ' ') {
			subdata.value = subdata[idname];
		} else {
			subdata.value = ' ';
		}
		this.getAllChosed(alldata);
	}
	//3. 遍历获取当前所有已选中的选项
	getAllChosed(data) {
		this.goodchooseList = data;
		//每次先清空汇总数组
		this.chosedList = [];
		this.chosedServiceList = [];
		this.goodchooseList.forEach(item => {
			item.submennu.forEach(subelement => {
				if (subelement.value == subelement.subid) {
					this.chosedList.push({
						'title': item.name,
						'data': subelement.subname
					})
				}
				/************怎么优化****************/
				if (subelement.minmennu != undefined) {
					subelement.minmennu.forEach(minelement => {
						if (minelement.value == minelement.minid) {
							this.chosedServiceList.push({
								'title': item.name,
								'data': minelement.minname + " " + minelement.minprice
							});
						}
					})
				}
			});
		})
	}

}

/**
 * 子类2： 商品筛选[每栏可多选 最多选5个] MultiChoose
 * @method :
 * 		1. 重写 getGoodChoose() 方法
 * 		=> 因为涉及到 最多选XX个的问题
 * 		   如果大于XX 返回一个XX
 *
 * 		2. getUnFold() //展开折叠事件
 */
// class MultiChooseList extends ChooseList{
// 	constructor(props){
// 		super();
// 		this.isFoldid = null,
// 		Object.assign(this,pros);//Object.assign方法用于对象的合并
//         return this;
// 	}
// 	getGoodChoose(subdata, data){
// 		let chosedCount = 0;
// 		//每次点击时先遍历同栏子元素的个数
// 		data.submennu.forEach(item => {
// 			if (item.value == item.subid) {
// 				chosedCount++;
// 			}
// 		})
// 		if(subdata.value == ' '){
// 			if(chosedCount >= 5){
// 				// this.showMsg();
// 				// return;
// 				return false;
// 			}else{
// 				subdata.value = subdata.subid;
// 			}
// 		}else{
// 			subdata.value = ' ';
// 		}
// 	}
// 	getUnFold(data){
// 		//目前来说只能同时展开一个
// 		if(this.isFoldid == data.id){
// 			this.isFoldid = null;
// 			return;
// 		}
// 		this.isFoldid = data.id;
// 	}
// }

//子类1
const singleList = new ChooseList();
//子类2 商品筛选
//const multiList = new  MultiChooseList();
export default singleList;
