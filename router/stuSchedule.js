const express = require("express");
const {
    insertStuSchedule,
    seleteClass,
    findByID,
    find,
} = require("../controller/stuSchedule");

let router = express.Router();

// 增加学生课表
router.post("/add", async (req, res) => {
    let {
        stuID,name,class1,class2,class3,class4,class5,class6,class7,class8,class9,class10,class11,class12,class13,class14,class15
    } = req.body;

    try {
        await insertStuSchedule({
            stuID,name,class1,class2,class3,class4,class5,class6,class7,class8,class9,class10,class11,class12,class13,class14,class15
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

// 修改一个学生的课表(选择一节课程或删除一节课程)
router.put("/update", async (req, res) => {
    let {
        stuID,
        classNumber
    } = req.body;

    try {
        await seleteClass({
            stuID
        }, {
            classNumber
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
router.get("/findById", async (req, res) => {
    let {
        stuID
    } = req.query;

    try {
        let data = await findByID({stuID});
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

// 查询学生课表
router.get("/find", async (req, res) => {
    try {
        let data = await find();
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