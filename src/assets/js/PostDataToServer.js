/**
 * 与服务器进行数据交互
 **/
import axios from 'axios';
import ApiHandler from './../../api/ApiHandler';
import IP from './ip.js';
import store from './../../store';
import jwt from './JsonWebToken.js';
import CookieConfig from './CookieConfig.js';
import router from './../../router/index.js'


var getApiConfig = function(urlKey) {
    return ApiHandler.findApiByKey(urlKey);
};
//url格式转换
var UrlChange = function(name) {
    var _url = '';
    while (name.indexOf('.') >= 0) {
        name = name.replace('.', '/');
    }
    _url = IP + name;
    return _url;
}
var PostJudgment = function(urlKey, data) {
    data = data || {};
    let {
        url,
        meta
    } = getApiConfig(urlKey);
    if (url === undefined) {
        throw new Error('URL_KEY 不存在');
    }
    const {
        isAuth
    } = meta;
    const {
        auth
    } = store.state.user;
    //是否具有api权限
    if (isAuth) {
        //是否具有用户权限
        if (auth) {

        } else {

        }

    }
    const payload = {
        "sub": "1234567890",
        "name": "John Doe",
        "admin": true
    };
    const secret = 'skydot';
    const tokenData = jwt.encode(payload, secret);
    data.token = tokenData;
    //请求头
    url = UrlChange(url);
    return {
        url,
        data
    };
}
var addInterceptors = function(urlKey,data){
    axios.interceptors.request.use((config)=>{
        return config;
    }, function(error) {
        return Promise.reject(error);
    });
    axios.interceptors.response.use(function(response){
        if(CookieConfig.isLogin()){
            CookieConfig.setCookie();
        }
        return response;
    }, (error) => {
        return Promise.reject(error);
    });
}
var PostDataToServer = function() {
    addInterceptors();
};
PostDataToServer.prototype.post = function(urlKey,data) {
    const postAlldata = PostJudgment(urlKey, data);
    return axios.post(postAlldata.url,postAlldata.data).then((result)=>{
        return result.data;
    });
};

PostDataToServer.prototype.get = function(urlKey, data) {
    const postAlldata = PostJudgment(urlKey, data);
    return axios.get(postAlldata.url, postAlldata.data).then((result) => {
        return result.data;
    });
};
const http = new PostDataToServer();
export default http;
