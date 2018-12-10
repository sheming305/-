console.log("111");
const fs = require('fs');
const http = require('http');
// console.log(http)
// 1.Sync同步读取文件 没加Sync为异步
// fs.readFile('./data.json',(err,data) => {
// 	console.log(data.toString())
// });
// 2.缓存区
// let data = new Buffer([,15,23,25])
// console.log(data)
//3.写入文件
// let Data = "<p>写入文件</p>"
// fs.writeFile('node.html',Data,(err,data) => {
// 	if(err){
// 		throw err
// 	}
// })
//4.读取文件信息 包括创建时间 状态
// fs.stat("node.html",(err,data) => {
// 	console.log(data)
// 	console.log(data.isFile())
// })
// 5.删除文件
// fs.unlink('delete.js',(err) => {
// 	console.log(data)
// })
// 6.删除非空目录

// 7.删除空目录
// fs.rmdir() 删除空文件夹，只能删除空文件夹
// fs.mkdir('目录路径',function(){})  创建一个新目录
// fs.readdir('目录路径',function(err,list){
		//list为读取到的所有文件夹喝子文件夹列表
//}) 读取目录中的文件列表
// 8.http.get
// http.get("http://nodejs.org/dist/index.json",function(res){
// 	console.log(res)
// 	res.on('data',function(a){
// 		console.log('------------')
// 		// console.log(a)
// 		console.log(a.toString())

// 	})

// 8.1读取流
// 	let stream = fs.createReadStream('文件路径') 文件读取流
//	stream.on('data',function(data){
		//监听读取流数据
//})
//  stream.on('error',function(error){
		//绑定错误事件
		// throw err
//})
//  stream.on('end',function(){
		//绑定结束事件
		// console.log('数据读取完毕')
//})

// 8.2，写入流
// let stream = fs.createWriteStream('文件路径') 文件写入流
//写入数据
	//stream.write('数据1')
	//stream.write('数据2')
	//stream.write('数据3')
	// stream.end() 流式写入完毕一定要有一个明确的结束标识
	//绑定finish数据写入完成事件
	//stream.on('finish',function(){})
	//绑定error出错事件
	//stream.on('error',function(err){})


// 8.3，管道pipe -->输出流与输入路之间传输数据的一种机制，可以实现对大文件的操作(文件大小超过内存)
// 	//将数据注入到（pipe管道流）用fs模块新建的a.html文件中
// 	res.pipe(fs.createWriteStream('./a.html')  -->写入流)
// })
// 8.4 链式流 --> 将多个管道拼接起来进行链式操作
//     输出流： .pipe(中转流).pipe(中转流).pipe(输出流)

//9.爬虫程序，从nipic批量下载图片
// 开发思路第一步：打开网页查看内容，找图片地址，查看网页源代码

//第二部： 编写代码实现打开网页，获取所有的html内容

//第三部： 用正则表达式提取出来有哪些图片

//第四部： 遍历图片地址数组，一个个请求

//第五步： 将获取的图片信息保存在硬盘上
// 递归删除文件夹以及文件详细代码如下
function deldir(dir){
	// 读取文件夹内容
	let list = fs.readdirSync(dir)
	// list[i]为读取到的每个文件夹以及文件夹以下的文件名称
	for(let i in list){
		//拼接文件当前目录
		let path = dir + '/' + list[i]
		let info = fs.statSync(path)
		if(info.isFile()){
			//如果是文件就删除文件
			fs.unlinkSync(path)
		}else{
			//如果不是文件就是目录，调用函数自身删除该目录
			arguments.callee(path)
		}
	}
	//删除空文件夹
	fs.rmdirSync(dir)
}

deldir("./删除的文件夹名称")
// var t = new Date().getTime().toString().slice(-1)



// 10，阿里云服务器
//10.1，买ECS服务器  镜像选择windows server  版本：2008 (win7风格) R2企业版 64位中文版 2012版本的是win10风格的
//10.2，打开后台管理系统中的云服务器ECS中的实例可以看见自己的服务器列表以及域名IP地址
//10.3，公网IP可以在浏览器使用
//10.4，使用window的远程桌面命令：mstsc   打开cmd命令窗口输入：mstsc即可
//10.5，输入后弹出窗口填写计算机名为：填写上面10.3中的公网IP即可点击连接即可
//10.6，连接后的用户名须为自己买的ECS 服务器中设置的用户名
//10.7，连接成功进入远程桌面，将nodeJs拷贝进去服务器的远程桌面安装即可
//10.8，装好后，在D盘创建一个服务器目录www
//10.9, 安装node服务器环境：在地址栏直接输入cmd,打开命令窗口在www文件夹下安装express框架 npm i -g express-generator(-g是全局安装) 生成器 
//10.10，安装完成后输入 express -e  命令服务器就挂好了  express -e demo 的意思是在当前文件夹下创建demo的文件夹安装node服务器
//10.11，在文件夹下面打开app.js 查看有没有监听端口没有的话写上app.listen(80,function(){
	// console.log('server is running')---->可以省略的步骤这是单独设置的端口
//})
//10.12, 安装node依赖包  npm i
//10.13,运行访问服务器 输入命令 node app
//10.14, 拷贝本地静态html  拷贝指远程桌面的www文件夹下的piblic文件夹下面刷新就可以看见页面效果

// input 复选框传值
// function fun(){
//     var obj = document.getElementsByName("select_time");
//     var list = [];
//     for(var i in obj){
//         if(obj[i].checked)
//             list.push(obj[i].value);
//     }
// }