const express = require("express");
const {
    insertStuSchedule,
} = require("../controller/stuSchedule");

let router = express.Router();

// 增加学生课表
router.post("/add", async (req, res) => {
    let {
        stuID,name,class1,class2
    } = req.body;

    try {
        await insertStuSchedule({
            stuID,name,class1,class2
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

// // 删除学生课表
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

// // 修改学生课表
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

// // 修改学生课表状态
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

// // 查询学生课表(分页)
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

// // 查询一个学生课表
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
