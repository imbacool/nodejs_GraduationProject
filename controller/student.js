const studentModel = require("../db/model/student");

// 增加学生
let insertStu = obj => studentModel.insertMany(obj);

// 删除学生
let deleteStu = stuID => studentModel.deleteOne(stuID);

// 修改学生
let updateStu = (username, obj) => studentModel.updateOne(username, obj);

// 修改学生(密码)
let changePSW = (username,password) => studentModel.updateOne(username,password);

// 查询学生
let findStu = ()=>studentModel.find();

// 查询一个学生(登录+个人信息)
let stuLogin = (username, password) => studentModel.findOne(username, password);

// 查询一个学生(stuID)
let findByID = (stuID) => studentModel.findOne(stuID);

module.exports = {
    insertStu,
    stuLogin,
    changePSW,
    updateStu,
    deleteStu,
    findStu,
    findByID,
};