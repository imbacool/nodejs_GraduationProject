const express = require("express");
const {
    insertTeacher,
    teachLogin,
    changePSW,
    updateTeacher,
    findTeacher,
    deleteTeacher,
    findByID,
} = require("../controller/teacher");

let router = express.Router();

// 增加教师
router.post("/add", async (req, res) => {
    let {
        username,password,teacherID,name,cellphone,gender,date,birthdate,hometown,ID,education,faculty,department,major,img
    } = req.body.obj;

    try {
        await insertTeacher({
            username,password,teacherID,name,cellphone,gender,date,birthdate,hometown,ID,education,faculty,department,major,img
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

// 删除教师
router.delete("/del", async (req, res) => {
    let {
        teacherID
    } = req.body;

    try {
        await deleteTeacher({
            teacherID
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

// 修改教师
router.put("/update", async (req, res) => {
    let {
        username,name,cellphone,gender,date,birthdate,hometown,ID,education,faculty,department,major,img
    } = req.body.obj;

    try {
        await updateTeacher({
            username
        }, {
            name,cellphone,gender,date,birthdate,hometown,ID,education,faculty,department,major,img
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

// 修改教师(密码)
router.put("/changePSW", async (req, res) => {
    let {
       username,password
    } = req.body;

    try {
        await changePSW({
            username
        }, {
            password
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

// 查询教师
router.get("/find", async (req, res) => {
    try {
        let data = await findTeacher();
        res.send({
            err: 0,
            msg: "ok",
            data
        });
    } catch (err) {
        res.send({
            err: -1,
            msg: err
        });
    };
})

// 查询一个教师(登录+个人信息)
router.get("/login", async (req, res) => {
    let {
        username,password
    } = req.query;

    try {
        let data = await teachLogin({username,password});
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

// 查询一个教师(teacherID)
router.get("/findByID", async (req, res) => {
    let {
        teacherID
    } = req.query;

    try {
        let data = await findByID({teacherID});
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
