const teacherModel = require("../db/model/teacher");

// 增加教师
let insertTeacher = obj => teacherModel.insertMany(obj);

// 删除教师
let deleteTeacher = teacherID => teacherModel.deleteOne(teacherID);

// 修改教师
let updateTeacher = (username, obj) => teacherModel.updateOne(username, obj);

// 修改教师(密码)
let changePSW = (username,password) => teacherModel.updateOne(username,password);

// 查询教师
let findTeacher = ()=>teacherModel.find();

// 查询一个教师(登录+个人信息)
let teachLogin = (username, password) => teacherModel.findOne(username, password);

// 查询一个教师(teacherID)
let findByID = (teacherID) => teacherModel.findOne(teacherID);

module.exports = {
    insertTeacher,
    teachLogin,
    changePSW,
    updateTeacher,
    findTeacher,
    deleteTeacher,
    findByID,
};