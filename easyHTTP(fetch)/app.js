/**
 * EasyHTTP library
 * 
 * 
 * @version 1.0.0
 * @author Ilia Volkov
 * @license MIT
 * 
 * 
 * 
 **/



class easyHTTP {
    get(url){
       return fetch(url)
            .then(res => res.json())
            .then(data => data)
            .catch(err => err);
    }
}






