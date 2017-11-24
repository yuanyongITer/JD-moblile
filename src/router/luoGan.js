import demo from '@/components/LUOGAN/CommodityDisplay'//商品展示
import loadtest from '@/components/LUOGAN/LoadMoreTest' //下拉加载更多测试组件

const list = [{
	path: '/demo',
    name: 'demo',
    component:demo
},{
	path: '/loadtest',
    name: 'loadtest',
    component:loadtest
}]

module.exports = list;