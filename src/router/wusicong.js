import PictureRotation from '@/components/WUSICONG/PictureRotation'
import goodsdetail from '@/components/WUSICONG/goodsdetail'
import goodsdetailtwo from '@/components/WUSICONG/goodsdetailtwo'
const activity = [{
	path: '/picturerotation',
    name: 'PictureRotation',
    component:PictureRotation
},
{
	path: '/goodsdetail',
    name: 'goodsdetail',
    component:goodsdetail
},
{
	path: '/goodsdetailtwo',
    name: 'goodsdetailtwo',
    component:goodsdetailtwo
}
]

module.exports = activity;