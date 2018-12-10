//1.安装好后设置环境变量：复制bin文件夹的完整路径添加到环境变量中就可以了
//  在cmd命令(管理员模式打开)窗口输入mongo就可以看见服务了


// 2.在非系统盘下创建一个文件夹mongodb，在创建2个子文件夹db和log
// 讲mongodb挂在成windows服务
	// 2.1.使用命令挂载创建服务(win7)：  mongod --dbpath 'E:\mongodb\db' --logpath "E:\mongodb\log\MongoDB.log" --install --serviceName 'MongoDB'
		// 这里的MongoDB.log就是开始建立的日志文件，serverName 'MongoDB'就是服务器名为MongoDB


	//2.2.(win10配置：)在MongoDB安装目录创建三个文件夹（也可自定义选择放置路径，此处我选择放在E:\MongoDB\）
						// (1)在conf文件夹下新建mongodb.config文件，内容如下：
						// dbpath=E:\MongoDB\data #数据库路径
						// logpath=E:\MongoDB\logs\mongodb.log #日志输出文件路径
						// logappend=true #错误日志采用追加模式
						// journal=true #启用日志文件，默认启用
						// quiet=true #过滤掉无用的日志信息，若需要调试使用请设置为false
						// port=27017 #端口号 默认为27017

						// (2)在logs文件夹下，新建mongodb.log文件
						//添加为系统服务 PowerShell（Admin） 
						// mongod.exe –config E:\MongoDB\conf\mongodb.config –install –serviceName “MongoDB” 
						// 启动服务 
						// net start mongodb  提示启动成功


	// 2.2 查看服务：在桌面鼠标右键我的电脑-->管理-->服务与应用程序-->刷新可以看到mongodb服务器然后右键点击启动
	// 2.3 链接服务器：在cmd命令窗口输入 mongo  就连接上了数据库


//3. 补充说明服务的命令
		// 3.1  net start mongodb 开启服务
		// 3.2  net stop mongdb  关闭服务
		// 3.3  sc delete mongodb 卸载服务


//4.数据库基础命令
   //进入数据库管理模式  mongo
   //显示所有数据库列表  show dbs
   //创建数据库   use 数据库名
   //查看当前正在使用的数据库  db
   //删除数据库 db.dropDatabase()

 //5.集合的命令
 	// 显示当前数据库中的所有集合 show collections
 	// 创建集合  db.集合名.insert({})  通常在创建数据时自动创建集合
	// 删除集合  db.集合名.drop()



// 6.数据的操作(重点)
	//新增文档(数据)
		// db.集合名.insert({"json数据"})  建议用其添加数据
		// db.集合名.save({"json数据"}) 向集合中增加数据，如果已经存在则更新
		// db.集合名.find() 查看表中的数据
		// db.集合名.find({条件语句}) 按条件查看表中的数据
		// db.集合名.find().pretty()  将找到的数据格式化显示出来


// 7.修改数据(重点)
	// db.集合名.update({数据})
	// db.test.update({'name':'xiaoming'},{$set:{'name':'aini'}}) 修改对象中的一个或者多个

// 8. 删除数据
	//db.集合名.remove({})  删除当前集合下面所有的数据
	//db.集合名.remove({条件对象})  删除指定的数据 


//  9.高级命令
	// 9.1 db.集合名.find({'字段名': {$gt:数字或者条件}})  $gt=大于  $lt=小于 $gte=大于等于 $lte=小于等于 $ne=不等于
	      // $in=指定条件中的任何一个数据
	// 9.2(查询指定范围的数据) db.集合名.find({'字段名':{$gt:30,$lt:40}})
	// 9.3 $or子句 查找多条件时符合其中一个
				// db.集合名.find({$or:[{json数据}]})
	// 9.4 and		
			//db.集合名.find({'字段名':'值','字段名':'值'}) 
	// 9.5	排序
		//	db.集合名.find().sort({'字段名':'1','字段名':'-1'}) 1为升序 -1为降序
	// 9.5 	限定输出limit()  skip() ----用于做分页
				// .limit(数字) 限定输出数据的条数
				// .skip(数字) 跳过指定的数据条数
				// db.集合名.find().sort({'age':'-1'}).limit(3) ---只查找年纪最大的三个人
	// 9.6	模糊查询	 找出所有姓刘的人
			// 	db.集合名.find({'字段名':/刘/i})  i可加可不加 加了好一点