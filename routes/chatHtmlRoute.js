var express = require('express');
var router = express.Router();
let arr = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('chatHtml', { title: 'chatHtml' });
});
router.post('/Message', function(req, res, next) {
    res.send('OK');
    if(arr.length>4){
        arr.shift();
    }
    arr.push([req.body.name, req.body.message]);
});

router.get('/Messages', function(req, res, next) {
    res.json(arr);
});
module.exports = router;

