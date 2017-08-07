let str='name=zfpx;age=8'
let querystring=require('querystring')
// 第三个参数是值的是不同字段之间的分隔符 ，如果没有就给默认&
// 第三个参数是字段的key和value 之间的分隔符 如果没有就默认=
querystring.parse(str)