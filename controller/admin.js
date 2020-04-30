const adminModel = require("../db/model/admin");

// 增加管理员
let insertAdmin = obj => adminModel.insertMany(obj);

// 修改管理员
let updateAdmin = (username, obj) => adminModel.updateOne(username, obj);

// 修改管理员(密码)
let changePSW = (username,password) => adminModel.updateOne(username,password);

// 查询一个管理员(登录+个人信息)
let adminLogin = (username,password) => adminModel.findOne(username,password);

module.exports = {
    insertAdmin,
    adminLogin,
    changePSW,
    updateAdmin,
};