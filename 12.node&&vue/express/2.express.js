let express = require('./express');

let app = express();

app.get('/',function (req, res) {
    res.end('home')
})
app.get('/user',function (req, res) {
    res.end('user')
})
app.listen(8080);
