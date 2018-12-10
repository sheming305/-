//数据传递GET POST PUT DELETE
let path = require('path')
let fs = require('fs')
require('http').createServer().on('request',function(req,res){
	if(req.url === '/action.html'){
		var str = ""
		req.on('data',function(data){
			str += data.toString()
		})
		req.on('end',function(){
			res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"})	
			//将接收到的数据拆分成一个数组分别为用户名和密码
			var query = str.split("&")
			var user = query[0].split("=")
			var psd = query[1].split("=")
			res.write("<p>接收到的用户名为:"+user[1]+"</p>")
			res.write("<p>接收到的密码为:"+psd[1]+"</p>")
			res.end()
		})
		return
	}
	var fn = './www' + req.url
	//判断文件是否为.css  .html文件扩展名
	var ext = path.extname(fn)
	// console.log(ext)
	var exts = {'.html':'text/html','.css':'text/css','.png':'image/png'}
	fs.readFile(fn,function(err,data){
		if(err){
			res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"})
			res.write('找不到网页...')
			res.end()
		}else{
			res.writeHead(200, {"Content-Type":exts[ext]+";charset=utf-8"})
			res.write(data)
			res.end()
		} 
		
	}) 
	
}).listen(80,function(){
	console.log('server is running')
}) 