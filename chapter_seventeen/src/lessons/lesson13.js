const BASE_URL = 'https://jsonplaceholder.typicode.com';

fetch(`${BASE_URL}/users/1`).then((res)=> res.json()).then((data)=>{
    console.log(data)
}).catch(e=>{
    console.log(e)
})


//*********Callback promise******* */
function getRequest(url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
    xhr.open('get', url)

    xhr.onreadystatechange  = function(e){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                let response = JSON.parse(xhr.response)
                resolve(response)
            }else{
                reject(new Error('New Error Occurred'))
            }
        }
    }
    xhr.send();
    })
}

 getRequest(`${BASE_URL}/users/5413`).then(data=>{
    console.log(data)
 }).catch(e=>{
    console.log(e)
 })
