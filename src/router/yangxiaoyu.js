import test from '@/components/YANGXIAOYU/demo'
import RatingDetail from '@/components/YANGXIAOYU/RatingDetail.vue'
import SiftTest from '@/components/YANGXIAOYU/children/SiftTest'
const detail = [{
	path: '/test',
    name: 'test',
    component:test
},{
	path: '/goodsrating',
	name: 'RatingDetail',
	component:RatingDetail
},{
  path: '/sifttest',
	name: 'SiftTest',
	component:SiftTest
}]

module.exports = detail;
