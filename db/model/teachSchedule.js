//教师课表的数据模型
const mongoose = require("mongoose");

let teachScheduleSchema = new mongoose.Schema({
    teacherID: {
        type: Number
    },
    name: {
        type: String
    },
    // 课程ID
    classID: {
        type: Number
    },
    // 课程中文名称
    classNameCN: {
        type: String
    },
    // 课程英文名称
    classNameEN: {
        type: String
    },
    // 学分
    credits: {
        type: String
    },
    // 学时
    classHours: {
        type: String
    },
    // 课程类别
    classType: {
        type: String
    },
    // 开课学院
    faculty: {
        type: String
    },
    // 课程简介
    classInfo: {
        type: String
    },
    // 上课时间
    classTime: {
        type: String
    },
    // 上课地点
    classroom: {
        type: String
    },
}, {
    // 删掉数据库的_V
    versionKey: false
});

// 创建数据模型
let teachScheduleModel = mongoose.model("teachSchedule", teachScheduleSchema);

module.exports = teachScheduleModel;