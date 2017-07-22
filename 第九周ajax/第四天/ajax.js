// 1.创建ajax对象，兼容所有浏览器
//函数的惰性思想
function createXHR() {
    var flag=false
    var xhr = null;
    //在ie6下XMLHttpRequest()在这个类是不存在的
    var ary = [
       function () {
          return new XMLHttpRequest()
    }, function () {
          return ActiveXObject("Microsoft.XMLHTTP")
    }, function () {
          return ActiveXObject("Msxml2.XMLHTTP")
    }, function () {
          return ActiveXObject("Msxml3.XMLHTTP")
    }];

for(var i=0;i<ary.length;i++){
        var curFn=ary[i];
        try{
            xhr=curFn();
            createXHR=curFn;
            flag=true;
            return xhr
        }catch(e){

    }
}
if(!flag){
    //如果上面几个方法都不兼容 使浏览器抛出一个错误
    throw new Error("你的浏览器不支持ajax")

}
return xhr
}
createXHR();
// $.ajax({
//     url:"./data.txt",
//     type:"get",
//     dataType:"json",
//     success:function () {
//
//     },
//     error:function () {
//
//     }
//
// });

ajax({
   url:"data.txt" ,
    success:function (data) {
        console.log(data);  
    }
});

function ajax(options) {
    var _defauit={
        url:"",
        type:"get",
        dataType:"json",
        async:true,
        data:null,
        success:null,
        error:null,
        //超过一秒 请求自动停止
        timeout:1000
    };
    for( key in options){
        if(options.hasOwnProperty(key)){
            _defauit[key]=options[key]
        }
// get请求是有缓存的
        if(_defauit.type==="get"){
            if(_defauit.url.indexOf("?")>=0){
                _defauit.url+="$"
            }else{
                _defauit.url+="?"
            }
        _defauit.url+="_="+Math.random();
        }
    }
    var xhr=createXHR();
    //创建ajax对象
    xhr.open(_defauit.type,_defauit.url,_defauit.async);
    xhr.onreadystatechange=function () {
        if(xhr.readState===4&&/^2\d{2}/.test(xhr.status)){
            var val=xhr.responseText;
            if(_defauit.dataType==="json"){
                val="JSON" in window ?JSON.parse(val):eval("("+val+")")
            }
            _defauit.success.call(xhr,val)
        }
    };
    xhr.send(_defauit.data)
}
