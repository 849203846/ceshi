// buffer（为了表示内存）
// buffer是global上的属性 可以在全局下直接访问
// 读取文件都是二进制 buffer表现给我们的都是16进制（最大就是f）
// buffer可以和字符串自由转换


// 支持utf-8格式
// 一个汉字有三个字节 字母数字都是一给字节
// 最小单位都是以字节来表示

// 字节的组成
// 一个字节有8个二进制组成，1b=8bit（闭坑位）


// 求出一个字节转化成10进制是多少
// 任意进制转化成10进制
// 1 1*2的0次方
// 1 1  1*2一次方+1*20次方
// 当前位上的值*当前进制^（当前所在为-1）累加

// 一个字节代表的最大10进制是255
// let total=0
// for(let i=1;i<=8;i++){
    // total+=1*Math.pow(2,i-1)
// }
// console.log(total);//255
// 2的8次方减一同样可以计算
// buffer是16进制的  要将10进制的再转化成16进制的 255代表的16进制是多少  是ff
// 所以buffer的范围是0到ff之间、 16进制有是以0x开头 0xff

// define-buffer
// 1buffer表示的是内存 不能随意扩张、但是没有数组里操作长度的方法 类似于pop shift
// 2大小是固定的
//1） 通过长度来创建buffer
// var buffer=new Buffer(6);//6个字节 两个汉字
// console.log(buffer);
// 一个字节代表8个唯
// buffer.fill(0) //手动填充0 0一般认为内存都是干净的

// 2)通过数组创建buffer 可以指定内容 只能放0-200之间的数，一般这种方式比较少用

// var buffer=new Buffer([100,200,0x64,64]); //指定内容前面加0x
// console.log(buffer); // 64 c8


// 3） 通过字符串申明buffer
// var buffer=new Buffer('zhufeng峰a') ;//一个汉字三个字节
// console.log(buffer);
// console.log(buffer[0]);//直接通过索引取值无法取出16进制 取出都是10进制的

// 4）slice方法
// 浅拷贝 拷贝的是引用地址 当引用的地址内的数据发生变化 拷贝后的结果也会发生变化
// 深拷贝 如果长得一模一样 并且内部存的地址完全不相同 而且两者一点关系都没有 递归循环
// var ary=[4,5,6];
// var arr=[ary,2,3];
// var newarr=arr.slice();
// var newarr=JSON.parse(JSON.stringify(arr)) //深拷贝 不识别function

// ary[0]=100;
// console.log(newarr);//100 5 6 2 3

// Object.assign()对象的浅拷贝
// var buffer=new Buffer([1,2,3]);
// var newbuffer=buffer.slice(0);
// newbuffer[0]=100;
// console.log(buffer); //buffer 存的也是引用地址
// console.log(newbuffer);两个用的是一个地址


// buffer-method
// 1）copy  拷贝 将小的buffer拷贝到大的buffer上
let buf1=new Buffer('珠峰');
let buf2=new Buffer('培训');
let bigbuf=new Buffer(12);
//先拷贝buf2 再拷贝buf1
// targetBuffer,目标buf targetStart,目标开始 sourceStart,原的开始 sourceEnd原的结束
buf2.copy(bigbuf,buf1.length);
buf1.copy(bigbuf,0);
// 基本上参数都是包前不包后
console.log(bigbuf.toString());//转化为字符串


// 2）concat 拼接 是buffer类上的
// list, totalLength)
// console.log(Buffer.concat([buf1,buf2,buf1]).toString())
// 实现concat方法
// 1判断是否传递长度，如果没传毒，自动算出拼接后的总长 如果传递了 以传递的为准
// 通过长度构建一个大bufer
// 循环每一项 将每一个buffer拷贝到大buffer上
// 拷贝后超过拷贝的长度要被截取掉 返回最终的buffer


function concat(list, totalLength) {
    if(totalLength=='undefined'){
        totalLength=0; //初始化totallength
        totalLength=list.reduce((prev,next)=>{//返回叠加后的就过
            return prev+next.length
        },totalLength)
    }
    let resuit=new Buffer(totalLength);
    let offset=0; //拷贝后的length
    list.forEach(item=>{
        if((!Buffer.isBuffer(item))){
            throw new Error("is not buffer")
        }else{
        item.copy(resuit,offset);
        offset+=item.length //每次将拷贝的位置累计
    }   });
return resuit.slice(0,offset) //保证真实的拷贝长度
}
console.log(concat([buf1,buf2,buf1],50).toString());


// 3)buffer.isBuffer()判断是否是buffer 返回的是布尔类型的




// transform
//进制转换 任意进制转换10进制 parseInt
console.log(parseInt('111',2));
// 任意进制转任意进制 toString
console.log((0xff).toString(2));


// base64 进制转换 把图片转换成base64 不是加密 md5 不是加密（不可逆）
// 当前的字节最大不超过64
let buffer=new Buffer('珠');
console.log(buffer);//<Buffer e7 8f a0>
// 16进制转换成2进制的

console.log((0xe7).toString(2));//11100111
console.log((0x8f).toString(2));//10001111
console.log((0xa0).toString(2));//10100000
// base64  最大64  二进制
// 111001 111000 111110 100000
console.log(parseInt('111001',2));// 57
console.log(parseInt('111000',2));// 56
console.log(parseInt('111110',2));// 62
console.log(parseInt('100000',2));// 32
let str='ABCDEFGHIGKLMNOPQRSTUVWXYZ';
str+=str.toLowerCase();
str+='0123456789';
str+='+/';
console.log(str[57] + str[56] + str[62] + str[32]); //base64编码 54+g

// 正确说法： 不是将图片都转为base64 较小的图片可以转换 可以减少请求 不要全部都转










