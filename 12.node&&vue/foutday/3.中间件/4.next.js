// app.get的时候 app内部维护了一个数组
let ware1=(req,res,next)=>{
 setTimeout(()=>{
     console.log(1);
     next()
     },3000)

};
let ware2=(req,res,next)=>{
    setTimeout(()=>{
        console.log(2);
    },2000)
};
let warse=[ware1,ware2];

let index=0;
function next() {
    let ware=warse[index++];
    ware(null,null,next)
}
next();
