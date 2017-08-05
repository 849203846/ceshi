let express = require('express');
let router = express.Router();

router.get('/pull',function (req,res) {
    res.send('拉面')
});
router.get('/knife',function (req, res) {
    res.send('刀削面')
});
module.exports=router;

