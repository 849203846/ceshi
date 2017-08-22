let express=require('express');
let {Movie}=require('./modul');
// let start=require('./tasks/main');
let app=express();
app.get('/',function (req,res) {
    Movie.find({},function (err, movies) {
        res.json(movies)
    })
});
// let CronJob=require('cron').CronJob;
// let job=new CronJob('0 0 * * * *',start);
// job.start();
app.listen(8080);

// touch .git ignore
// 118.31.112.78
