const stuScheduleModel = require("../db/model/stuSchedule");

// 增加学生课程
let addClass = obj => stuScheduleModel.insertMany(obj);

// 修改学生课程(result)
let updateClass = (obj,result) => stuScheduleModel.updateOne(obj,result);

// 删除学生课程
let deleteClass = (stuID,classID) => stuScheduleModel.deleteOne(stuID,classID);

// 查询一个学生的所有课程
let findByStuID = (stuID) => stuScheduleModel.find(stuID);

// 查询一个教师的所有课程(result)
let findByTeacherID = (teacherID) => stuScheduleModel.find(teacherID);

module.exports = {
    addClass,
    updateClass,
    deleteClass,
    findByStuID,
    findByTeacherID,
};