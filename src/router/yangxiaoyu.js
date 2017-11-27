import test from '@/components/YANGXIAOYU/demo'
import RatingDetail from '@/components/YANGXIAOYU/RatingDetail.vue'
import GoodFilter from '@/components/YANGXIAOYU/children/GoodFilter'
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
}]

module.exports = detail;
