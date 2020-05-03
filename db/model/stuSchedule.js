//学生课表的数据模型
const mongoose = require("mongoose");

let stuScheduleSchema = new mongoose.Schema({
    stuID: {
        type: String
    },
    stuName: {
        type: String
    },
    teacherID: {
        type: String
    },
    teacherName: {
        type: String
    },
    classID: {
        type: String
    },
    classNameCN: {
        type: String
    },
    classTime: {
        type: String
    },
    classroom: {
        type: String
    },
    result: {
        type: String
    },
}, {
    // 删掉数据库的_V
    versionKey: false
});

// 创建数据模型
let stuScheduleModel = mongoose.model("stuSchedule", stuScheduleSchema);

module.exports = stuScheduleModel;