//res.send()方法只能出现一次
//链式调用方法： 1.res.status(200).send("成功")
				//2.res.status(400).send("<h1>没有此资源</h1>")
				//res.status(500).send("服务器故障")

//res.json() 返回JSON数据
//res.render('模板名称'，{数据})   //后端发给浏览器的渲染模板	
//res.download('./xxx.doc') 下载当前目录下的文件
//res.download('./xxx.doc'，'zzz.doc') 下载当前目录下的文件,并重命名为zzz.doc		
//res.redirect('/login.html') 从指定的url跳转到设置的url 也可以放绝对地址
//res.cookie(name,value[,options]) 设置cookie
//res.set() 可以设置响应头


//1.请求对象req(重点)
// 接收get方式传的值(也就是获取地址中的参数) req.query.参数名   示例:req.query.id

// 接收POST方式=传的值(也就是获取表单中的参数)  示例:比如<input type="text" name="user" />  
//  接收的值就为: req.body.name 

// 2.请求对象的其他方法
//2.1匹配模式(匹配URL地址上后面的数据)
		//在接收请求的地方去匹配，再通过语法进行接收  (俗称的伪静态)
		//语法: req.params.参数名
		//示例: router.get('/news.html/:id',function(req,res){
				 // let id = req.params.id
				 // res.send('接收到的id为'+id)
	
			// })


 // 3.中间件
     //app.js里面的app.use()全部是中间件
     //app.use(function(req,res,next){
     	//next() 为调用伪函数(放行才能执行下面的函数)  不写则不执行下面的代码，即不执行此函数以下的函数
     	         //调用伪函数相当于调用下一个中间件(函数)
     	//或者res.send('内容') 也可以拦截即执行本函数后面的不执行
     // })


// 4.应用级的中间件
	//app.METHED()是需要处理的HTTP请求的方法  get ,post ,put ...全部小写
// 5.其他的中间件第三方的需要安装才能使用			



//在非系统盘下创建一个文件夹mongodb，在创建2个子文件夹db和log
//讲mongodb挂在成windows服务
	// 1.使用命令挂在服务  mongod --dbpath '新建的db文件夹路径' --logpath "新建的log文件夹路径\MongoDB.log" --install --serverName 'MongoDB'
		//这里的MongoDB.log就是开始建立的日志文件，serverName 'MongoDB'就是服务器名为MongoDB