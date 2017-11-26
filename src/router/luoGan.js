import demo from '@/components/LUOGAN/CommodityDisplay'//商品展示
import loadtest from '@/components/LUOGAN/LoadMoreTest' //下拉加载更多测试组件
import topbutton from '@/components/LUOGAN/CommodityDisplayTopButton'
import SpreadTest from '@/components/LUOGAN/test'
const list = [{
	path: '/demo',
    name: 'demo',
    component:demo
},{
	path: '/loadtest',
    name: 'loadtest',
    component:loadtest
},{
	path:'/topbutton',
	name:'topbutton',
	component:topbutton
},{
	path:'/spreadtest',
	name:'SpreadTest',
	component:SpreadTest
}]

module.exports = list;