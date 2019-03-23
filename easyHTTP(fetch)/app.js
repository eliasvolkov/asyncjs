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

    post(url, data){
        return fetch(url,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => data)
        .catch(err => err);
    }

    put(url, data){
        return fetch(url,{
            method: 'UPDATE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => data)
        .catch(err => err);
    }
}






