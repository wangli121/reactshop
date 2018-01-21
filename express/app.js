
//包引入
const express = require("express");
const bodyParser = require('body-parser');
const multer = require('multer');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
const mysql = require('mysql');
const cors = require('cors');

const app = express();//服务器环境
app.listen(4000, () => { console.log('server is runing...') });

//静态页面托管
app.use(express.static('./www'));

//配置中间件
app.use(bodyParser.urlencoded({
  limit: 2 * 1024,//限定
  extended: false //扩展模式
}));

let objMulter = multer({ dest: './upload' });//配置文件保存位置
app.use(objMulter.any());//文件上传类型限定

let arrKeys = [];
for (var i = 0; i < 99999; i++) {
  arrKeys.push('aa' + Math.random());
}
app.use(cookieSession({
  name: 'alex_id',
  keys: arrKeys,
  maxAge: 1000 * 20
}));

//引擎默认输出设置
app.set('view.engine', 'html');
//模板路径设置
app.set('views', './views');
//输出与引擎匹配
app.engine('html', consolidate.ejs);

//链接库

let db = mysql.createConnection({
  host: 'localhost',//库地址，主机名
  port: 3306,//可选参数  端口
  database: 'react',//指定库名
  user: 'root',
  password: ''
});

app.use(cors({
  "origin": ['http://localhost:8001'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ['Content-Type', 'Authorization']
}));

//登录
app.use('/login', (req, res) => {
  var sql = `SELECT * FROM USER WHERE uname="${req.body.uname}"`
  switch (req.body.act) {
    case 'reg':
      db.query(sql, (err, data) => {
        if (err) {
          res.send('err');
        } else {
          if (data.length) {
            res.send('1');
          } else {
            let sql = `INSERT INTO user(uname,upw) VALUES("${req.body.uname}","${req.body.upw}")`;
            db.query(sql, (err, data) => {
              res.send('2');
            })
          }
        }
      });
      break;
    case 'login':
      let sql1 = `SELECT * FROM USER WHERE uname="${req.body.uname}" AND upw="${req.body.upw}"`;
      db.query(sql1, (err, data) => {
        if (err) {
          res.send('1');
        } else {
          if (data.length) {
            res.send({ 'stat': 2, 'id': data[0] })
          } else {
            res.send('0')
          }
        }
      })
      break;
  }
});
//获取商品
app.use('/getdata', (req, res) => {
  sql2 = `SELECT * FROM cart`
  db.query(sql2, (err, data) => {
    if (err) {
      res.send('服务器错误！')
    } else {
      res.send(data)
    }
  })
})
app.use('/detail', (req, res) => {
  sql2 = `SELECT * FROM cart where cartid=${req.body.cartid}`
  db.query(sql2, (err, data) => {
    if (err) {
      res.send('服务器错误！')
    } else {
      res.send(data)
    }
  })
})
//detail商品加
app.use('/addshopcart', (req, res) => {
  sql2 = `SELECT SHOPCART FROM user where uid=${req.body.uid}`
  db.query(sql2, (err, data) => {
    if (err) {
      res.send('服务器错误！')
    } else {
      if (!data[0].SHOPCART) {
        var num = 1;
        var obj = {}
        obj[req.body.cartid] = num;
        JSON.stringify(obj)
      } else {
        var obj = JSON.parse(data[0].SHOPCART)
        if (!obj[req.body.cartid]) {
          obj[req.body.cartid] = 1;
        } else {
          obj[req.body.cartid] = obj[req.body.cartid] + 1;
        }
      }
      sql3 = `UPDATE USER SET SHOPCART='${JSON.stringify(obj)}' where uid=${req.body.uid}`
      db.query(sql3, (err, data) => {
        if (err) {
          console.log('插入失败！')
        } else {
          console.log('插入成功！')
          res.send(data)
        }
      })
    }
  })
})
//购物车渲染
app.use('/shopcart', (req, res) => {
  sql = `SELECT shopcart FROM user where uid=${req.body.uid}`
  db.query(sql, (err, data) => {
    if (err) {
      res.send('服务器错误！')
    } else {
      if (data[0].shopcart.length==0) {

      } else {
        var data = data[0]
        var str = '';
        var obj = JSON.parse(data.shopcart)
        for (key in obj) {
          str += `cartid=${key} OR `
        }
        str = str.slice(0, str.lastIndexOf(' OR'))
        sql1 = `SELECT * from cart WHERE ${str}`;
        db.query(sql1, (err, data) => {
          if (err) {
            res.send('服务器错误！')
          } else {
            res.send({ 'data': data, 'obj': obj })
          }
        })
      }
    }
  })
})
//提交购物车
app.use('/submint', (req, res) => {
  sql2 = `UPDATE USER SET SHOPCART='${req.body.shopcart}' where uid=${req.body.uid}`
  db.query(sql2, (err, data) => {
    if (err) {
      res.send('服务器错误！')
    } else {
      res.send('11')
    }
  })
})