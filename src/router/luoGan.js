import demo from '@/components/LUOGAN/CommodityDisplay'//商品展示
import loadtest from '@/components/LUOGAN/test'

const list = [{
	path: '/demo',
    name: 'demo',
    component:demo
},{
	path: '/demotest',
    name: 'loadtest',
    component:loadtest
}]

module.exports = list;