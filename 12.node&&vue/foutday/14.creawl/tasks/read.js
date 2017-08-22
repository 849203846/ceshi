let cheerio=require('cheerio');
let iconv=require('iconv-lite');
let request=require('request');
// 读取网页数据 返回电影列表
let debug=require('debug')('crawl:read');
let read=(url,callback)=>{
request({url,encoding:null},function (err, response, body) {
    if(!err&&response.statusCode===200){
        body=iconv.decode(body,'gbk');
        let $=cheerio.load(body);
        let movies=[];
        $('.keyword a.list-title').each(function () {
            let $this=$(this);
            let movie={
                name:$this.text(),
                url:$this.attr('href')
            };
            debug(`独到电影${movie.name}`);
            movies.push(movie)
        });
        callback(err,movies)
    }
})
};


// read(url, cb);
module.exports=read;