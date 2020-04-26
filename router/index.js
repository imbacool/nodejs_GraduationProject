const express = require("express");
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const upload = multer({})
const {
    insertGoods,
    deleteGoods,
    updateGoods,
    changeState,
    findGoodsByPage,
    findGoodsById,
} = require("../../controller/04_goodsList/index");

let router = express.Router();

// 图片上传
router.post('/img', upload.single('img'), (req, res) => {
    let {
        buffer,
        mimetype,
    } = req.file
    let extName = mimetype.split('/')[1]
    let name = Date.now();
    fs.writeFile(path.join(__dirname, `../../public/img/${name}.${extName}`), buffer, (err) => {
        if (err) {
            res.send({
                err: -1,
                msg: err,
                path:""
            })
        } else {
            res.send({
                err: 0,
                msg: '上传成功',
                path: `/public/img/${name}.${extName}`
            })
        }
    })
})

// 增加商品
router.post("/add", async (req, res) => {
    let {
        name,desc,price,num,type,img,state,date,hits,publisher
    } = req.body;

    try {
        await insertGoods({
            name,desc,price,num,type,img,state,date,hits,publisher
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

// 删除商品
router.delete("/del", async (req, res) => {
    let {
        _id
    } = req.body;

    try {
        await deleteGoods({
            _id
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

// 修改商品
router.put("/update", async (req, res) => {
    let {
        _id,
        name,desc,price,num,type,img,state,date,hits,publisher
    } = req.body;

    try {
        await updateGoods({
            _id
        }, {
            name,desc,price,num,type,img,state,date,hits,publisher
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

// 修改商品状态
router.put("/state", async (req, res) => {
    let {
        _id,
        state
    } = req.body;

    try {
        await changeState({
            _id
        }, {
            state
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

// 查询商品(分页)
router.get("/findByPage", async (req, res) => {
    let {
        page,
        pageSize
    } = req.query;

    try {
        let data = await findGoodsByPage(page,pageSize);
        res.send({
            err: 0,
            msg: "ok",
            count: data.count,
            list: data.list
        });
    } catch (err) {
        res.send({
            err: -1,
            msg: err,
            count: 0,
            list: []
        });
    };
})

// 查询一个商品
router.get("/findById", async (req, res) => {
    let {
        _id
    } = req.query;

    try {
        let data = await findGoodsById({_id});
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
