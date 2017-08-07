/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */


let express = require('express');
let cookit=require('cookie-parser')
let app = express();
app.use(cookit())
app.get('/visit',function (req, res) {
    let cookies=req.cookies
if(cookies&&cookies.visit){
    let visit=parseInt(cookies.visit)+1
    res.cookie('visit',visit)
    res.send('第'+visit+'次进入')
}else{
   let visit=1;
    res.cookie('visit',visit);
    res.send('第'+visit+'次进入')
}});
app.listen(8080);
