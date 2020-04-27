const express = require("express");
const {
    insertTeachSchedule,
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

// // 删除教师课表
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

// // 修改教师课表
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

// // 修改教师课表状态
// router.put("/state", async (req, res) => {
//     let {
//         _id,
//         state
//     } = req.body;

//     try {
//         await changeState({
//             _id
//         }, {
//             state
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

// // 查询教师课表(分页)
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

// // 查询一个教师课表
// router.get("/findById", async (req, res) => {
//     let {
//         _id
//     } = req.query;

//     try {
//         let data = await findGoodsById({_id});
//         res.send({
//             err: 0,
//             msg: "ok",
//             data
//         });
//     } catch (err) {
//         res.send({
//             err: -1,
//             msg: err,
//             data:{}
//         });
//     };
// })

module.exports = router;
