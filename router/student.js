const express = require("express");
const {
    insertStu,
    stuLogin,
    changePSW,
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

// // 删除学生
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

// // 修改学生
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

// // 查询学生(分页)
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

// 查询一个学生(登录)
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

module.exports = router;
