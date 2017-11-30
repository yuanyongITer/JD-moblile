import PictureRotation from '@/components/WUSICONG/PictureRotation'
import GoodsDetail from '@/components/WUSICONG/GoodsDetail'
import SwipeTest from '@/components/WUSICONG/Swipe'
const activity = [{
	path: '/picturerotation',
    name: 'PictureRotation',
    component: PictureRotation
},{
	path: '/GoodsDetail',
    name: 'GoodsDetail',
    component: GoodsDetail
},{
	path: '/SwipeTest',
	name: 'SwipeTest',
	component: SwipeTest
}]

module.exports = activity;
