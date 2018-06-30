import Axios from 'axios';
import config from'../../config/axios.config'
import 'layer'

console.log(config);
let http = Axios.create(config);

http.interceptors.request.use(
    config => {
        //显示Loading动画
        if(config.method == 'post'){
            window.OVERLAY_INDEX = layer.load(0, {
                shade: [0.3, '#fff'],
                shadeClose: false 
              });
        }

        //附加认证信息token
        let token = localStorage.getItem("access_token") || sessionStorage.getItem("access_token");
        config.headers.common['Authorization'] = 'Bearer' + token;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    response => {
        //关闭Loading动画
        if (window.OVERLAY_INDEX) {
            layer.close(window.OVERLAY_INDEX);
        }

        if(response.status === 401){
            //TODO:跳转到登录页面
        }else if(response.status === 403){
            layer.msg('您无权访问该功能！')
        }else{
            return response;
        }
    },
    error => {
        if (error.status === 401) {
            //TODO:跳转到登录页面
            return Promise.resolve(error.response);
        } else if (error.status === 403) {
            layer.msg('您无权限访问该功能');
            return Promise.reject(error.response);
        } else {
            return Promise.reject(error);
        }
    }
);

export default http;