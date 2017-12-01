/**
 * 处理所有API借口的处理器
 * @methods
 *  findApiWithKey      key[string 可选]                  根据key值返回API基本信息
 *  findApiByGroup      group[string || array 可选]       根据分组返回API信息
 **/
import API_CONFIG from './API.json'

var ApiHandler = function () {

};

ApiHandler.prototype = {
    findApiByKey: function (key) {
        if (!key) {
            return null;
        }
        return API_CONFIG['API_LIST'][key] ? API_CONFIG['API_LIST'][key] : null;
    },
    findApiByGroup: function (group) {
        let _apiKey;
        let _apiItem;
        let result = {};
        const API_LIST = API_CONFIG['API_LIST'];
        const GROUP_LIST = API_CONFIG['GROUP_LIST'];
        //构造分组API数据
        for (_apiKey in API_LIST) {
            _apiItem = API_LIST[_apiKey];
            result[_apiItem.group] = result[_apiItem.group] || {
                group_name: GROUP_LIST[_apiItem.group].group_name,
                api: []
            };
            result[_apiItem.group].api.push({
                url: _apiItem.url,
                name: _apiItem.name,
                meta: _apiItem.meta
            });
        }
        if(!group){
            return result;
        }else if(typeof group === 'string'){
            return result[group] || null;
        }else if(group.constructor === Array){
            let _otherResult = {};
            group.forEach(function (item) {
               _otherResult[item] = result[item] || null;
            });
            return _otherResult;
        }
    }
};


export default new ApiHandler();
