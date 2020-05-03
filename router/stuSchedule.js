const express = require("express");
const {
    addClass,
    updateClass,
    deleteClass,
    findByStuID,
    findByTeacherID,
} = require("../controller/stuSchedule");

let router = express.Router();

// 增加学生课程
router.post("/add", async (req, res) => {
    let {
        stuID,stuName,teacherID,teacherName,classID,classNameCN,classTime,classroom,result
    } = req.body;

    try {
        await addClass({
            stuID,stuName,teacherID,teacherName,classID,classNameCN,classTime,classroom,result
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

// 修改学生课程(result)
router.put("/update", async (req, res) => {
    let {
        stuID,classID,result
    } = req.body;

    try {
        await updateClass({
            stuID,classID
        }, {
            result
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

// 删除学生课程
router.delete("/del", async (req, res) => {
    let {
        stuID,classID
    } = req.body;

    try {
        await deleteClass({
            stuID,classID
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

// 查询一个学生的所有课程
router.get("/findByStuID", async (req, res) => {
    let {
        stuID
    } = req.query;

    try {
        let data = await findByStuID({stuID});
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

// 查询一个教师的所有课程(result)
router.get("/findByTeacherID", async (req, res) => {
    let {
        teacherID
    } = req.query;

    try {
        let data = await findByTeacherID({teacherID});
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

module.exports = router;