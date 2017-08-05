//server是提供数据接口的
//第一个接口获取轮播图数据 /api/sliders
// 第二个接口 获取最新上映数据 /api/hot
let url = require('url');
let http = require('http');
let sliders = require('./sliders');
let fs = require('fs');

function read(callback) { //读取图书的方法
  fs.readFile('./book.json', 'utf-8', function (err, data) {
    if (err || data == '') return callback([]); //如果文件不存在 或者文件是空的 没有图书 返回空数组
    callback(JSON.parse(data))
  })
}
function write(data,callback) {
  fs.writeFile('./book.json',JSON.stringify(data),callback)
}
http.createServer(function (req, res) {
  let {pathname, query} = url.parse(req.url, true);
  if (pathname === '/api/sliders') {
    res.end(JSON.stringify(sliders))
  }
  else if (pathname === '/api/hot') {
    read(function (data) {
      let books = data.reverse().slice(0, 9); //截取最后添加九本图书
      res.end(JSON.stringify(books))
    })
  }
  else if (pathname === '/api/book') {
    //请求方法  读取出的是大写
    let method = req.method;
    let id = parseInt(query.id);
    if (method === 'GET') {
      if (id) {
        //获取一个
        read(function (books) {
          // find找到后返回那一项 找不到返回 的是undefined
          let book=books.find(item=>item.id==id)
          res.end(JSON.stringify(book))
        })
      } else {
        //获取全部
        read(function (books) {
          res.end(JSON.stringify(books))
        })
      }

    } else if (method === 'POST') {
      //接收传过来的数据 添加一个id 再写入 到book。json中
      let str='';
      req.on('data',function (data) {
        str+=data
      });
      req.on('end',function () {
        let book=  JSON.parse(str)
        read(function (books) {
          //读取所有的图书 判断是否有书
          book.id=books.length===0?1:books[books.length-1].id+1
          books.push(book)
          write(books,function () {
            res.end(JSON.stringify(book))//添加成功后返回成功的那一项
          })
        })

      })
    } else if (method === 'PUT') {
      let str='';
      req.on('data',function (a) {
        str+=a;
      })
      req.on('end',function () {
        let book=  JSON.parse(str)
        read(function (books) {
          books=books.map(item=>{
            if(item.id==id){
            return book
            }
            return item
          })

        write(books,function () {
          res.end(JSON.stringify(book))
        })
      })
      })

    } else if (method === 'DELETE') {
        read(function (books) {
          books=books.filter(item=>item.id!=id)
          write(books,function () {
            res.end(JSON.stringify({}))//添加成功后返回成功的那一项
          })
        })
    }

  }

}).listen(3000, function () {
  console.log('监听成功');
});
