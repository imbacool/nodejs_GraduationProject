const adminModel = require("../db/model/admin");

// 添加管理员
let insertAdmin = obj => adminModel.insertMany(obj);

// // 删除管理员
// let deleteAdmin = _id => adminModel.deleteOne(_id);

// // 修改管理员
// let updateAdmin = (_id, obj) => adminModel.updateOne(_id, obj);

// // 修改管理员状态
// let changeState = (_id, state) => adminModel.updateOne(_id, state);

// // 查询管理员(分页)
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

// // 查询一个管理员
// let findAdminById = _id => adminModel.findOne(_id);

module.exports = {
    insertAdmin,
};