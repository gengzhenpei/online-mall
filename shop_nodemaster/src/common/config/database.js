const mysql = require('think-model-mysql');
// 数据库配置
module.exports = {
  handle: mysql,
  database: 'dwshop', //
  prefix: 'shop_',
  encoding: 'utf8mb4',
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '911029', //
  dateStrings: true
};
