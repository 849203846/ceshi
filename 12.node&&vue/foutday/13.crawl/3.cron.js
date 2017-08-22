let CronJob=require('cron').CronJob;

// 1.参数是任务的之息时机
// 任务的定义
// 六个*代表
// 秒 分钟 小时 日期 月份 星期
// 固定的值 或者是*通配符
// 枚举值 任何一个值 ‘5，15，25’
// */5 每隔5秒执行一次
let job=new CronJob('*/30 * 22 * * 1,5',function () {
    console.log(new Date().toLocaleString())
});
job.start();
