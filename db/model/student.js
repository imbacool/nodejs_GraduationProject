//学生的数据模型
const mongoose = require("mongoose");

let studentSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    stuID: {
        type: String
    },
    name: {
        type: String
    },
    cellphone: {
        type: String
    },
    gender: {
        type: String
    },
    // 入学日期
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
        type: String
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
    // 专业方向
    direction: {
        type: String
    },
    // 班级
    Class: {
        type: String
    },
    // 年级
    grade: {
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
let studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;