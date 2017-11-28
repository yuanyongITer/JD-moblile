import test from '@/components/YANGXIAOYU/demo'
import RatingDetail from '@/components/YANGXIAOYU/RatingDetail.vue'
import GoodFilter from '@/components/YANGXIAOYU/children/GoodFilter'
import GoodChoose from '@/components/YANGXIAOYU/children/GoodChoose'
const detail = [{
	path: '/test',
    name: 'test',
    component:test
},{
	path: '/goodsrating',
	name: 'RatingDetail',
	component:RatingDetail
},{
  path: '/goodfilter',
	name: 'GoodFilter',
	component:GoodFilter
},{
  path: '/goodchoose',
	name: 'GoodChoose',
	component:GoodChoose
}]

module.exports = detail;
