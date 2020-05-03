const teachScheduleModel = require("../db/model/teachSchedule");

// 增加教师课表
let insertTeachSchedule = obj => teachScheduleModel.insertMany(obj);

// 删除教师课表
let deleteTeachSchedule = classID => teachScheduleModel.deleteOne(classID);

// 修改教师课表
let updateTeachSchedule = (classID, obj) => teachScheduleModel.updateOne(classID, obj);

// 查询教师课表
let findTeachSchedule = ()=>teachScheduleModel.find();

// 查询一个课程(classID)
let findByID = classID => teachScheduleModel.findOne(classID);

// 查询一个教师的所有课程(teacherID)
let findByTeacherID = classID => teachScheduleModel.find(classID);

module.exports = {
    insertTeachSchedule,
    deleteTeachSchedule,
    updateTeachSchedule,
    findTeachSchedule,
    findByID,
    findByTeacherID,
};