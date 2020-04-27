//学生课表的数据模型
const mongoose = require("mongoose");

let stuScheduleSchema = new mongoose.Schema({
    stuID: {
        type: String
    },
    name: {
        type: String
    },
    // String格式：classID/result(默认-),如：111/- 或者 222/98
    class1: {
        type: String
    },
    class2: {
        type: String
    },
    class3: {
        type: String
    },
    class4: {
        type: String
    },
    class5: {
        type: String
    },
    class6: {
        type: String
    },
    class7: {
        type: String
    },
    class8: {
        type: String
    },
    class9: {
        type: String
    },
    class10: {
        type: String
    },
    class11: {
        type: String
    },
    class12: {
        type: String
    },
    class13: {
        type: String
    },
    class14: {
        type: String
    },
    class15: {
        type: String
    },
}, {
    // 删掉数据库的_V
    versionKey: false
});

// 创建数据模型
let stuScheduleModel = mongoose.model("stuSchedule", stuScheduleSchema);

module.exports = stuScheduleModel;