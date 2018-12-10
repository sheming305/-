var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// 连接数据库
 mongoose.connect("mongodb://127.0.0.1:27017/news",function(err){
		if(err){
			throw err
		}else{
			console.log('数据库链接成功')
		}
	})
// 定义骨架
var listSchema = new mongoose.Schema({
							title:String,
							author:String,
							from:String,
							content:String,
							time:String,
							hits:Number
						})
// 创建模型
var listModel = mongoose.model('list',listSchema,'list')

//挂载一个显示所有数据列表的路由
router.get('/list.html',function(req,res){
	//通过listModel获取所有的数据
	listModel.find().exec(function(err,data){
		//render专为渲染动态模板ejs
		res.render('newslist.ejs',{list:data})
	})
});

//挂在一个保存新增数据得路由，save_add.html接收收据的模板为动态模板
router.post('/save_add.html', function(req, res, next) {

	//接收客户端post方式传过来得值
  var title = req.body.title;
  var author = req.body.author;
  var from = req.body.from;
  var content = req.body.content;

  //做完一节测试一下拿到得数据，可以看到在cmd命令台打印出来的数据
  console.log(title,author,from,content)

  //将数据添加到数据库
  var list = new listModel();
  list.title = title;
  list.author = author;
  list.from = from;
  list.content = content;
  list.time = new Date().toLocaleString()
  list.hits = 1;
  list.save(function(){
  	res.send('<script>alert("发布成功");location.href="/list.html";</script>')
  })

});

//编写路由挂载一个删除列表的动态页面的路由功能--接收id删除
router.get('/del.html',function(req,res){
	//根据id查找到数据实体
	var id = req.query.id
	listModel.findById(id).exec(function(err,data){
		data.remove(function(){
			//删除完成后跳转到列表页面
			res.send('<script>alert("删除成功");location.href="/list.html";</script>')
		})
	})
});

//编写挂载一个修改列表的路由功能edit.html，保存修改后的数据 接收id修改对应项
router.get('/edit.html',function(req,res){
	//根据id查找到数据实体
	var id = req.query.id
	listModel.findById(id).exec(function(err,data){
		res.render('newsedit',{news:data})
	})
});

//创建save_edit.html路由来接收newsedit.ejs传过来的值用于保存用户修改的内容
router.post('/save_edit.html',function(req,res){
	//接收用户修改后的数据
	var title = req.body.title;
  	var author = req.body.author;
  	var from = req.body.from;
  	var content = req.body.content;
  	// 查找到数据修改成新的值,获取到要修改数据的id
  	var id = req.body.id
  	listModel.findById(id).exec(function(err,data){
  		// 保存修改后内容
  		data.title = title;
  		data.from = from;
  		data.author = author;
  		data.content = content
  		//发布时间和点击率不需要改

  		//修改完成后保存数据库
  		data.save(function(err){
  			res.send('<script>alert("修改成功");location.href="/list.html";</script>')
  		})
  	})
  	
});

/* GET home page. 首页得路由*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
