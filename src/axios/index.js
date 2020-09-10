import JsonP from 'jsonp'

export default class Axios{
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:"callback"
            },function(err,res){
                //jsonp一般是通过回调的，这边是to-do
                if(res.status === "success"){
                    resolve(res)
                }else{
                    reject(res.message)
                }
            })
        })
    }
}