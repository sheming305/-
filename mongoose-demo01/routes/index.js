var express = require('express');
var router = express.Router();
//1.引入mongoose模块
var mongoose = require('mongoose')
//2.链接数据库(127.0.0.1本机的 也可以链接别人的)
mongoose.connect('mongodb://127.0.0.1:27017/app',function(err){
	//以上的app为数据库名
	if(err){
		throw err
	}else{
		console.log('数据库连接成功')
	}
})
//3.定义骨架
var singerSchema = new mongoose.Schema({
	id:Number,
	name:String,
	psd:Number
	
})
// 4.创建模型model                模型名称   骨架名称   集合名称php称为表
var singerModel = mongoose.model('test',singerSchema,'test')
//首页路由
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  //利用模型查找读取数据
  singerModel.find({},function(err,data){
  	// console.log(data)
  	res.send(data)
  })
})

//新增数据
router.get('/add.html',function(req,res){
	// 根据模型创建实例
	var singer = new singerModel()
	singer.name = '大刀'
	singer.psd = 45644
	singer.save(function(err,data){
	    // console.log('数据新增成功')
		res.send(data)
	})
})
//删除指定id的数据
router.get('/del.html',function(req,res){
	var id = req.query.id  //接收GET方式传的id
	singerModel.findById(id).exec(function(err,data){
		// res.send(data)
		data.remove(function(err){
			console.log('数据删除成功,数据id为+'id,'删除的数据为+'data)
		})
	})
})
module.exports = router;
