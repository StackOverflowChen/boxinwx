var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// 定义数据模型,user.js利用该模型进行交互
var adminSchema = new Schema({
    'username': String,
    'password': String,
})

var Admin = mongoose.model('Admin', adminSchema, 'user');
// 'user'参数--模型会在use集合内查找数据集合,若不指定则按照前者的复数查找

module.exports = Admin;