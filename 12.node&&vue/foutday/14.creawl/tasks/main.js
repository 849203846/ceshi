let read = require('./read');
let write = require('./write');
let {Movie} = require('../modul');
let async = require('async');
const url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
let debug=require('debug')('crawl:main');

function start() {
    async.waterfall([
        // 为了放置出现重复数据 我们在任务的最开始峨县清空一个集合
        function (cb) {//第一个任务只有一个参数
            Movie.remove({}, cb)
        },
        function (data, cb) {
            read(url, cb)
        },
        function (movies, cb) {
            write(movies, cb)
        }
    ], function (err, movies) {
        debug('全部任务完成');
        process.exit(0)//正常结束当前进程
    });
}

start();

module.exports=start;