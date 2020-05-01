const express = require("express");
const {
    insertStu,
    stuLogin,
    changePSW,
    updateStu,
    deleteStu,
    findStu,
    findByID,
} = require("../controller/student");

let router = express.Router();

// 增加学生
router.post("/add", async (req, res) => {
    let {
        username,password,stuID,name,cellphone,gender,date,birthdate,hometown,ID,education,faculty,department,major,direction,Class,grade,img
    } = req.body;

    try {
        await insertStu({
            username,password,stuID,name,cellphone,gender,date,birthdate,hometown,ID,education,faculty,department,major,direction,Class,grade,img
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

// 删除学生
router.delete("/del", async (req, res) => {
    let {
        stuID
    } = req.body;

    try {
        await deleteStu({
            stuID
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

// 修改学生
router.put("/update", async (req, res) => {
    let {
        username,name,cellphone,gender,date,birthdate,hometown,ID,education,faculty,department,major,img,direction,Class,grade
    } = req.body.obj;

    try {
        await updateStu({
            username
        }, {
            name,cellphone,gender,date,birthdate,hometown,ID,education,faculty,department,major,img,direction,Class,grade
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

// 修改学生(密码)
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

// 查询学生
router.get("/find", async (req, res) => {
    try {
        let data = await findStu();
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

// 查询一个学生(登录+个人信息)
router.get("/login", async (req, res) => {
    let {
        username,password
    } = req.query;

    try {
        let data = await stuLogin({username,password});
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

// 查询一个学生(stuID)
router.get("/findByID", async (req, res) => {
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

module.exports = router;
