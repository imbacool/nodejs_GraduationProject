//教师的数据模型
const mongoose = require("mongoose");

let teacherSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    teacherID: {
        type: Number
    },
    name: {
        type: String
    },
    cellphone: {
        type: Number
    },
    gender: {
        type: String
    },
    // 入职日期
    date: {
        type: String
    },
    birthdate: {
        type: String
    },
    hometown: {
        type: String
    },
    // 身份证
    ID: {
        type: Number
    },
    // 学历
    education: {
        type: String
    },
    // 学院
    faculty: {
        type: String
    },
    // 系
    department: {
        type: String
    },
    // 专业
    major: {
        type: String
    },
    img: {
        type: String
    },
}, {
    // 删掉数据库的_V
    versionKey: false
});

// 创建数据模型
let teacherModel = mongoose.model("teacher", teacherSchema);

module.exports = teacherModel;