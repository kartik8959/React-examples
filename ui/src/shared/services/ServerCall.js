
import axios  from "axios";

const baseUrl='http://localhost:2020/';

class ServerCall{

    static fnSendGetReq(url){
   
    }
    static fnSendPostReq(url,data){
           return axios.post(baseUrl+url,data)
    }
    static fnSendPutReq(url,data){
        
    }
    static fnSendDeleteReq(url,data){
        
    }
}

export default ServerCall