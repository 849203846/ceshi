let mongoose=require('mongoose');
let conn=mongoose.createConnection('mongodb://127.0.0.1/201705crawl');
let MovieSchema=new mongoose.Schema({
    name:String,
    url:String
});
exports.Movie=conn.model('Movie',MovieSchema);
