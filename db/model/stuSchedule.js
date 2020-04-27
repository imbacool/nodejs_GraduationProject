//学生课表的数据模型
const mongoose = require("mongoose");

let stuScheduleSchema = new mongoose.Schema({
    stuID: {
        type: Number
    },
    name: {
        type: String
    },
    // 对象里包括classID(Number)和成绩result(String,默认空字符串)
    class1: {
        type: Object
    },
    class2: {
        type: Object
    },
}, {
    // 删掉数据库的_V
    versionKey: false
});

// 创建数据模型
let stuScheduleModel = mongoose.model("stuSchedule", stuScheduleSchema);

module.exports = stuScheduleModel;