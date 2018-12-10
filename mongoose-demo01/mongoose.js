//基于nodejs的第三方模块，用于操作mongodb数据库
// 1.安装  须在配置安装express框架环境后(1.express -e demo  2.npm i -->安装依赖)  安装mongoose(npm install mongoose)比较方便

// 2.使用   
	// 2.1，链接数据库 mongoose.connect("mongodb://127.0.0.1:27017/数据库名",function(err){
		// if(err){
		// 	throw err
		// }else{
		// 	console.log('数据库链接成功')
		// }
	// }
//3.链接数据库属于动态网页 在routers里面链接数据库