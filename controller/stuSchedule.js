const stuScheduleModel = require("../db/model/stuSchedule");

// 添加学生课表
let insertStuSchedule = obj => stuScheduleModel.insertMany(obj);

// // 删除学生课表
// let deleteAdmin = _id => adminModel.deleteOne(_id);

// // 修改学生课表
// let updateAdmin = (_id, obj) => adminModel.updateOne(_id, obj);

// // 修改学生课表状态
// let changeState = (_id, state) => adminModel.updateOne(_id, state);

// // 查询学生课表(分页)
// let findAdminByPage = async (page, pageSize) => {
//     // 按照一定条件查询
//     let data = await adminModel.find();
//     // 查询到的数据的数量
//     let count = data.length;
//     // 按照一定条件分页
//     let list = await adminModel.find().skip(Number((page - 1) * pageSize)).limit(Number(pageSize));

//     return {
//         count,
//         list
//     }
// };

// // 查询一个学生课表
// let findAdminById = _id => adminModel.findOne(_id);

module.exports = {
    insertStuSchedule,
};