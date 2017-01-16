var express = require('express')
var app = express()
var router = express.Router()

app.get('/',function(req,res,next){
	console.log('hello')
	next()
},function(req,res){
	console.log('world')
	res.send('world')
})

app.use(function(req,res,next){
	console.log('Time:',Date.now())
	next()
})

app.use('/user/:id',function(res,req,next){
	console.log('Request Type:',req.method)
	next()
})

app.get('/user/:id',function(req,res,next){
	res.send('USER')
})

var server = app.listen(3000)
app.use(express.static(__dirname+'/download'))