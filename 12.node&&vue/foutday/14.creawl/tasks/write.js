let {Movie}=require('../modul');
let write=(movies,callback)=>{
    Movie.create(movies,callback)
};
module.exports=write;
