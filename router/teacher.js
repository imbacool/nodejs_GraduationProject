const express = require("express");
const {
    insertTeacher,
    teachLogin,
    changePSW,
} = require("../controller/teacher");

let router = express.Router();

// 增加教师
router.post("/add", async (req, res) => {
    let {
        username,password,teacherID,name,cellphone,gender,date,birthdate,hometown,ID,education,faculty,department,major,img
    } = req.body;

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

// // 删除教师
// router.delete("/del", async (req, res) => {
//     let {
//         _id
//     } = req.body;

//     try {
//         await deleteGoods({
//             _id
//         });
//         res.send({
//             err: 0,
//             msg: "ok"
//         });
//     } catch (err) {
//         res.send({
//             err: -1,
//             msg: err
//         });
//     };
// })

// // 修改教师
// router.put("/update", async (req, res) => {
//     let {
//         _id,
//         name,desc,price,num,type,img,state,date,hits,publisher
//     } = req.body;

//     try {
//         await updateGoods({
//             _id
//         }, {
//             name,desc,price,num,type,img,state,date,hits,publisher
//         });
//         res.send({
//             err: 0,
//             msg: "ok"
//         });
//     } catch (err) {
//         res.send({
//             err: -1,
//             msg: err
//         });
//     };
// })

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

// // 查询教师(分页)
// router.get("/findByPage", async (req, res) => {
//     let {
//         page,
//         pageSize
//     } = req.query;

//     try {
//         let data = await findGoodsByPage(page,pageSize);
//         res.send({
//             err: 0,
//             msg: "ok",
//             count: data.count,
//             list: data.list
//         });
//     } catch (err) {
//         res.send({
//             err: -1,
//             msg: err,
//             count: 0,
//             list: []
//         });
//     };
// })

// 查询一个教师(登录)
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

module.exports = router;
