import http from './http';

export default{
    getById: function(id){
        return http.get('/user/getById',{params:{id:id}}).then(function(response){
            return response.data;
        });
    }
}