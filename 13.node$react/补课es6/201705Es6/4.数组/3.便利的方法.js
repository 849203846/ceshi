// keys entries
let ary=[1,2,3,4,5]
for ( var va of ary.keys() ){
    //console.log(va);///索引

}
// 全都便利出来
for(var [key,val] of ary.entries()){
    console.log("key:%s,val:%s",key,val);
}

