function newXHR() {
    var xhr=null,flag=false,ary=[
        function () {
            return new XMLHttpRequest()
        },
        function () {
            return new ActiveXObject('Microsoft.XMLHTTP')
        },
        function () {
            return new ActiveXObject('Msxml2.XMLHTTP')
        },
        function () {
             return new ActiveXObject('Msxml3.XMLHTTP')
        }
    ]

    for(let i=0;i<ary.length;i++){
        var cur=ary[i]
        try{
            xhr=cur()
            flag=true;
            newXHR=xhr
        }
        catch (e){

        }
    }
    if(!flag){
        throw new Error('你的浏览器不支持ajax')
    }
}
newXHR()



function ajax(options) {
    var _defauit={
        url:"",
        type:'get',
        datatype:'json',
        async:true,
        data:null,
        success:null
    }
    for( let key in options){
        if(options.hasOwnProperty(key)){
            _defauit[key]=options[key]
        }
    }
    if(_defauit.type==='get'){
        _defauit.url+='_='+Math.random()
    }
    var xhr=newXHR()

xhr.open(_defauit.type,_defauit.url,_defauit.async)

xhr.onreadystatechange=function () {
    if(xhr.readyState==4&&xhr.status==200){
        var val=xhr.responseText
        if(_defauit.datatype==='json'){
            val='JSON' in window?JSON.parse(val):eval("("+val+")")
        }
        _defauit.success.call(xhr,val)
    }
}
xhr.send(_defauit.type)
}