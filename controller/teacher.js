const teacherModel = require("../db/model/teacher");

// 添加教师
let insertTeacher = obj => teacherModel.insertMany(obj);

// // 删除教师
// let deleteteacher = _id => teacherModel.deleteOne(_id);

// 修改教师
let updateTeacher = (username, obj) => teacherModel.updateOne(username, obj);

// 修改教师(密码)
let changePSW = (username,password) => teacherModel.updateOne(username,password);

// // 查询教师(分页)
// let findteacherByPage = async (page, pageSize) => {
//     // 按照一定条件查询
//     let data = await teacherModel.find();
//     // 查询到的数据的数量
//     let count = data.length;
//     // 按照一定条件分页
//     let list = await teacherModel.find().skip(Number((page - 1) * pageSize)).limit(Number(pageSize));

//     return {
//         count,
//         list
//     }
// };

// 查询一个教师
let teachLogin = (username,password) => teacherModel.findOne(username,password);

module.exports = {
    insertTeacher,
    teachLogin,
    changePSW,
    updateTeacher,
};