const stuScheduleModel = require("../db/model/stuSchedule");

// 添加学生课表
let insertStuSchedule = obj => stuScheduleModel.insertMany(obj);

// 修改一个学生的课表(选择一节课程或删除一节课程)
let seleteClass = (stuID,classNumber) => stuScheduleModel.updateOne(stuID,classNumber);

// 查询一个学生的所有课程
let findByID = stuID => stuScheduleModel.findOne(stuID);

// 查询学生课表
let find = () => stuScheduleModel.find();

module.exports = {
    insertStuSchedule,
    seleteClass,
    findByID,
    find,
};