var express = require('express');
var fs = require('fs');
var stat = fs.stat;
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
const fstream = require('fstream');
const tar = require('tar');
const zlib = require('zlib');
var Mock = require('mockjs');
var dbapi = require('./dbapi');
var eventproxy = require('eventproxy');
let cp = require('child_process');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//form模块

//公用json搭建
app.get("/pjson",function(req, res){  
  res.send({status:1,enterNum:10});
})
// 监听
var server=app.listen(8082,'10.10.92.32',function() {
    var host = server.address().address;
  console.log(host+'success listen...8082');
});
