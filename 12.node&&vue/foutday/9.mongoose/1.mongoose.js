// 安装 mongoose
// npm i mongoose
// 2.引入mongoose
let mongoose=require('mongoose');
// 3.连接数据库
// 创建连接的时候 参数是连接字符串 mongodb://IP或域名:端口号/数据库的名称
// 协议是顶死的 ip或者域名写你要操作的ip或者域名 数据库的名字可以事先不存在 实际写入的时候 如果mongodb发现次数据库不存在会帮我自动创建
let conn=mongoose.createConnection('mongodb://127.0.0.1:27017/on');
// console.log(conn);//次方法会返回一个连接对象
// 4。定义集合和骨架模型 规定了各个集合中的文档的属性名和属性的类型
// schema只规定名字和类型 但是并不能操作数据库 与数据库连接没有关系
let userSchema=new mongoose.Schema({
    // 规定用户集合中的文档有那些属性
    username:String,
    age:Number
})
// 5.定义用户的模型 模型是通过数据库的连接创建的 可以关联某个数据库并操作某个数据库
// 模型名一般首字母要大写 定义模型有两个参数 第一个是模型的名字 此模型对应的schema
let User=conn.model('User',userSchema);
// 集合名称=模型名 》=转小写》 =复数

// 如何向数据库的集合中插入一个文档对象
// create方法的意思是向数据库的user集合中插入一个文档
// 保存对象的时候会过滤掉没有在schema定义的字段 如果给的字段少于schema中定义的字段 则只会保存提供的字段
// 如果给定的字段类型不匹配则会尝试转换 如果转换失败则会报错
// User.create({username:'zfpx',age:'123'},function (err, doc) {
    //
    // err//错误对象
    // 如果写入失败的会把失败的原因放在err里
    // doc是保存成功的文档对象返回
    // console.log(doc);
    //{ __v: 0,
   // username: 'zfpx',
   //     age: 1,
   //  每一个文档都有一个文艺的 与业务无关的，每当保存文档的时候 mongodb会自动帮每隔文档生成一个惟一的 无业务含义的——id字段 通过他来表示每个文档
   //     _id: 598e760403a4650514210df4 } 标识
   //  外键
   //  指的是存在当前集合中的别的集合的主键
// });
//修改
// 第一个参数是根性的条件
// 第二个参数是更新后的值 指定要更新那个字段 改成什么值
// 修改的时候默认只匹配第一条
// {multi:true} 多个的意思 可以匹配很多条
// User.update({username:'zfpx'},{age:900},{multi:true},function (err, result) {
    // console.log(err);
    // console.log(result);
    // null
    // { ok: 1, nModified: 1, n: 1 }
    // nModified表示修改成功的条数为1
    // n 表示需要修改的条数 1.其实就是根据条件匹配的条数
// });
// 默认情况下会删除所有匹配到的记录

// User.remove({},function (err,result) {
//
//     console.log(err);
//     console.log(result);
//
// })

// 查询 是数据库操作中最重要的部分
// 一分插入十分查询

// let users=[
//
// ]
// for(let i=1;i<=10;i++){
//     users.push({username:`zfpx${i}`,age:i})
// }
// User.create(users,function (err, docs) {
//     console.log(err);
//     console.log(docs);
// })

// find方法会查询符合条件的记录的数组
// 不管找没找到 返回的都是数组
// User.find({username:'zfpx'},function (err,users)
// {
//     console.log(err);
//     console.log(users.length);
//     if(users.length){
//         console.log(users);
//     }
// })
// find方法永远会便利所有的记录，
 // 登录的时候，注册时查看是否用户名被人占用的情况下
// User.findOne({username:'zfpx'},function (err,odc) {
//     console.log(err);
//     console.log(doc);//找不到返回null
// })

// 根据id查询对应的文档对象
// User.findById('598e838fdac3010b6c64b46b',function (err,doc) {
//     console.log(doc);
//
//
// })

// 年龄大于3的
// $gte大于等于
// $lt 小于
// lte小于等于
// 年龄小于3或者大于6
//  User.find({$or:[{age:{$lt:3}},{age:{$gt:6}}]},function (err,users)
//  {
//      console.log(err);
//      console.log(users.length);
//      if(users.length){
//          console.log(users);
//      }
//  })
// 大于3并且小于6
// User.find({and:[{age:{$lt:3}},{age:{$gt:6}}]},function (err,users)
// {
//     console.log(err);
//     console.log(users.length);
//     if(users.length){
//         console.log(users);
//     }
// })


// 名字里面包含1的
// User.find({username:/1/},function (err,users)
// {
//     console.log(err);
//     console.log(users.length);
//     if(users.length>0){
//         console.log(users);
//     }
// })


// 分页查询
let pageNum=2; //第二页
let pageSize=3; //每页三条
// sort派寻 里面传入排序的条件 //{age:1}表示 按照age排序 升序排列  {age:-1}降序
// skip表示跳过指定的条数， 当前页码-1*每页的条数
// limit 限定最大返回的 条数'
// 在以上方法执行 的时候 向数据库的请求并没有真正发出 只要当调用exec方法的时候请求菜真正发出
User.find().sort({age:1}).skip(pageSize*(pageNum-1)).limit(pageSize).exec(function (err, docs) {
    // 当查询结果取回来的时候会调用回调函数，并调用回调函数，并传入查询到的结果
})
