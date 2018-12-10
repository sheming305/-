let fs = require('fs')
let path = require('path')
require('http').createServer().on('request',function(req,res){
	// console.log(req.url)
	// if(req.url==='/' || req.url==="/index.html"){
	// 	fs.readFile('./www/index.html',function(err,data){
	// 		console.log(data)
	// 		res.writeHead(200, {'"Content-Type": "text/html";charset="utf-8"'})
	// 		res.write(data)
	// 		res.end()
	// 	})
	// }
	// 优化写法
	if(req.url === "/"){
		req.url = '/index.html'
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
