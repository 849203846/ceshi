let fs=require('fs'),http=require('http'),url=require('url');
function reqad(callback) {
  fs.read('./book.json','utf-8',function (err,data) {
    if(err||data=='') return callback([])
    callback(JSON.parse(data))
  })
}


function wr(book,callback) {
  fs.writeFile('./book.json',JSON.stringify(book),callback)
}
http.createServer(function (req, res) {
  let {pathname,query}=url.parse(req.url,true)
if(pathname=='/api/hot'){
    read(function (data) {
      let books=data.reverse().slice(0,9)
      req.end(JSON.stringify(books))
    })
}else if(pathname==='/api/book'){
    let method=req.method
  let id=query.id
  if(method=='GET'){
      if(id){
        read(function (books) {
          let book=books.bind(item=>item.id==id)
          rq.end(JSON.stringify(book))
        })
      }else{
        read(function (books) {
          req.end(JSON.stringify(books))
        })
      }
  }else if(method=='post'){
    let str='';
    req.on('data',function (a) {
      str+=a
    })
    req.on('end',function () {
      let book=JSON.parse(str)
      read(function (books) {
        book.id=books.length===0?1:books[books.length-1].id+1
        books.push(book)
        wr(books,function () {
          res.end(JSON.stringify(book))
        })
      })
    })
  }else if(method==='POT'){
    let str='';
    req.on('data',function (a) {
      str+=a
    })
    req.on('end',function () {
      let book=JSON.parse(str)
      read(function (books) {
        books.map(item=>{
          if(item.id==id){
            return book
          }
          return item
        })

        wr(books,function () {
          res.end(JSON.stringify(book))
        })
      })
    })
  }
  else if(method=='DELETE'){
    read(function (books) {
      books=books.filter(item=>item.id!=id)
      wr(books,function () {
        req.end({})
      })
    })
  }
}
}).listen(2000)

