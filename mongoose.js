//mongoose是基于nodejs的第三方模块，用于操作mongodb数据库
// 1.安装  须在配置安装express框架环境后(1.express -e demo  2.npm i -->安装依赖)  安装mongoose(npm install mongoose)比较方便

// 2.使用   
	// var mongoose = require('mongoose')
	// 2.1，链接数据库 mongoose.connect("mongodb://127.0.0.1:27017/数据库名",function(err){
		// if(err){
		// 	throw err
		// }else{
		// 	console.log('数据库链接成功')
		// }
	// }
//3.链接数据库属于动态网页 在项目文件夹下面的routers里面的indexjs里面输入以上代码链接数据库  然后在cmd命令窗口输入命令 node app 就可以看见效果


//4.定义骨架Schema--->数据库模型骨架,模型 ,不具备数据库操作能力
	// 骨架的类型有:String Number Date Buffer Boolean Mixed ObjectId Array
		// 4.1，语法: var singerSchema = new mongoose.Schema({
							// 字段名:类型,
							// 字段名:类型
					// })

//5.创建模型Model ---->可以对数据库进行操作
	// 5.1 语法: var model = mongoose.model('模型名称',骨架,'集合名称')
				//一般模型名称与集合名称保持一致
		// 示例: var singerModel = mongoose.model('singer',singerSchema,'singer')

// 6.实体 entity  由model创建的实体,他的操作影响数据库
	// var singer = new singerModel()
		// singer.属性名 = 值
		// singer.save()  将添加到实例上的属性保存到数据库中
		// singer.remove() 删除数据p


// 7.数据操作(增删改查)
	// 7.1 查找数据找出多条: 模型.find({条件},function(err,data){
					//find找出来的是数组,没有数据为空数组
			// })	

	//	7.2 查找一条数据
				// 模型.findById('id',function(err,data){
					//findById找出来的是一个对象
				// })

	// 7.3 	常用的写法(为了实现更好的链式调用)
				// 模型.find({}).exec(function(err,data){})


	// 7.4 新增,修改数据
			// var list = new listModel()  根据模型创建实例
			// list.name = '王五'
			// list.psd = '45562'
			// list.save(function(err){console.log('新增成功')})	

   // 7.5  删除数据
   			//找出要被删除的数据,调用实体方法remove()删除数据	

   			// listModel.findById(id).exec(function(err,data){
   			// 	data.remove(function(err){
   			// 		console.log('删除成功')
   			// 	})
   			// })
   								