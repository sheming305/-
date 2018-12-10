// nodea开发服务器基础篇
let http = require('http')
// console.log(http)
// 创建服务器
let server = http.createServer()
// 监听request请求事件，当前请求事件发生时就反返回数据
server.on('request',function(req,res){
	console.log(req.url)
	// req:请求对象 包括浏览器客服端请求的数据以及请求头 主体
	// res: 响应对象 包括服务器响应的数据以及请求头 主体
	res.writeHead(200, {'Content-Type': 'text/html'})
  	res.write('<head><meta charset="utf-8"/></head>')
  	//根据用户请求的不同网址请求不同的数据
  	if(req.url === '/'){
  		res.write('<h1>您好,首页</h1>')
  	}
	if(req.url === '/index.html'){
		res.write('<h2>您好,nodejs</h2>') 
	}
	res.end()
})
//监听80端口
server.listen(82,function(){
	console.log(('服务已运行...'))
})


//查看当前电脑开了哪些端口命令： netstat -a      netstat -ab 查看具体程序占用的端口
//http状态吗  301 永久重定向  302临时重定向 304 使用缓存，服务器没有被更新过
             // 其他的百度

             //MIME类型为 text/html 。。。。等等可以百度