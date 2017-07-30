// let xhr=new XMLHttpRequest();
// xhr.open('get','/clock',true);
// xhr.responseType='json';
// xhr.onload=function () {
//     time.innerHTML=xhr.response.time
// }
// }
// xhr.send();

function ajax({url='',method='get',dataType='text',data=null,async=true}) {

    return new Promise( (resolve, reject)=> {
        let xhr=new XMLHttpRequest()
        xhr.open(method,url,async)
        xhr.responseType=dataType;
        xhr.onload= () =>{
            resolve(xhr.response)
        }
        xhr.onerror= (err)=> {
            reject(err)
        }
        xhr.send(data)
    })

}
ajax({
    url:'xxx',
    method:'get',
    dataType:'json',
    data:JSON.stringify({}),
}).then(function (data) {
    time.innerHTML=data.time
});