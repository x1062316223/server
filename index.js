
var express = require('express')
var app = express()

var path = require('path');

//assuming app is express object
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/hello_js/index.html'));
});
//assuming app is express object
app.get('/index.js', function(req,res){
    res.sendFile(path.join(__dirname+'/hello_js/index.js'));
});

app.get('/test', function (req, res) {
    res.send('Hello World')
})
//validateUser
app.get('/validateUser', function (req, res) {

        //get username

        var userName = req.query.userName; 

        //get password
    
        var passWord = req.query.passWord; 
    
        //validation
    
        if (userName == "test" && passWord == "123") {
            res.send('validateUser Called')    
        } else {
            res.send('Failed')     
           }


})

app.listen(3000)