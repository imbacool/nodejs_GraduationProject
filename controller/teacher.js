const teacherModel = require("../db/model/teacher");

// 添加管理员
let insertTeacher = obj => teacherModel.insertMany(obj);

// // 删除管理员
// let deleteteacher = _id => teacherModel.deleteOne(_id);

// // 修改管理员
// let updateteacher = (_id, obj) => teacherModel.updateOne(_id, obj);

// // 修改管理员状态
// let changeState = (_id, state) => teacherModel.updateOne(_id, state);

// // 查询管理员(分页)
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

// // 查询一个管理员
// let findteacherById = _id => teacherModel.findOne(_id);

module.exports = {
    insertTeacher,
};