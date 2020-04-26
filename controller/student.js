const studentModel = require("../db/model/student");

// 添加学生
let insertStu = obj => studentModel.insertMany(obj);

// // 删除学生
// let deletestu = _id => studentModel.deleteOne(_id);

// // 修改学生
// let updatestu = (_id, obj) => studentModel.updateOne(_id, obj);

// // 修改学生状态
// let changeState = (_id, state) => studentModel.updateOne(_id, state);

// // 查询学生(分页)
// let findstuByPage = async (page, pageSize) => {
//     // 按照一定条件查询
//     let data = await studentModel.find();
//     // 查询到的数据的数量
//     let count = data.length;
//     // 按照一定条件分页
//     let list = await studentModel.find().skip(Number((page - 1) * pageSize)).limit(Number(pageSize));

//     return {
//         count,
//         list
//     }
// };

// // 查询一个学生
// let findstuById = _id => studentModel.findOne(_id);

module.exports = {
    insertStu,
};