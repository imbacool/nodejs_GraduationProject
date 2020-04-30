const express = require("express");
const {
    insertAdmin,
    adminLogin,
    changePSW,
    updateAdmin,
} = require("../controller/admin");

let router = express.Router();

// 增加管理员
router.post("/add", async (req, res) => {
    let {
        username,password,adminID,name,cellphone,gender,date,birthdate,hometown,ID,education,faculty,department,major,img
    } = req.body;

    try {
        await insertAdmin({
            username,password,adminID,name,cellphone,gender,date,birthdate,hometown,ID,education,faculty,department,major,img
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

// 修改管理员
router.put("/update", async (req, res) => {
    let {
        username,name,cellphone,gender,date,birthdate,hometown,ID,education,faculty,department,major,img
    } = req.body.obj;

    try {
        await updateAdmin({
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

// 修改管理员(密码)
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

// 查询一个管理员(登录+个人信息)
router.get("/login", async (req, res) => {
    let {
        username,password
    } = req.query;

    try {
        let data = await adminLogin({username,password});
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
