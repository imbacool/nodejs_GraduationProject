const express = require("express");
const {
    insertTeachSchedule,
    deleteTeachSchedule,
    updateTeachSchedule,
    findTeachSchedule,
    findByID,
} = require("../controller/teachSchedule");

let router = express.Router();

// 增加教师课表
router.post("/add", async (req, res) => {
    let {
        teacherID,name,classID,classNameCN,classNameEN,credits,classHours,classType,faculty,classInfo,classTime,classroom
    } = req.body;

    try {
        await insertTeachSchedule({
            teacherID,name,classID,classNameCN,classNameEN,credits,classHours,classType,faculty,classInfo,classTime,classroom
        });
        res.send({
            err: 0,
            msg: "ok"
        });
    } catch (err) {
        res.send({
            err: -1,
            msg: err
        });
    };
});

// 删除教师课表
router.delete("/del", async (req, res) => {
    let {
        classID
    } = req.body;

    try {
        await deleteTeachSchedule({
            classID
        });
        res.send({
            err: 0,
            msg: "ok"
        });
    } catch (err) {
        res.send({
            err: -1,
            msg: err
        });
    };
})

// 修改教师课表
router.put("/update", async (req, res) => {
    let {
        teacherID,name,classID,classNameCN,classNameEN,credits,classHours,classType,faculty,classInfo,classTime,classroom
    } = req.body;

    try {
        await updateTeachSchedule({
            classID
        }, {
            teacherID,name,classNameCN,classNameEN,credits,classHours,classType,faculty,classInfo,classTime,classroom
        });
        res.send({
            err: 0,
            msg: "ok"
        });
    } catch (err) {
        res.send({
            err: -1,
            msg: err
        });
    };
})

// 查询教师课表
router.get("/find", async (req, res) => {
    try {
        let data = await findTeachSchedule();
        res.send({
            err: 0,
            msg: "ok",
            data
        });
    } catch (err) {
        res.send({
            err: -1,
            msg: err,
        });
    };
})

// 查询一个教师课表(classID)
router.get("/findByID", async (req, res) => {
    let {
        classID
    } = req.query;

    try {
        let data = await findByID({classID});
        res.send({
            err: 0,
            msg: "ok",
            data
        });
    } catch (err) {
        res.send({
            err: -1,
            msg: err,
            data:{}
        });
    };
})

module.exports = router;
