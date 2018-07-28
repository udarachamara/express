var http = require('http');
var express = require('express');

app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/',function(req , res){
	res.render('index', { title: 'App - home', p: "Hello World..!", })
});


var port = process.env.PORT || 8080;

app.listen(port,function(){
	console.log('listen at '+port);
});
