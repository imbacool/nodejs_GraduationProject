//商品的数据模型
const mongoose = require("mongoose");

//new一个schema对象
let goodsSchema = new mongoose.Schema({
    //第二个参数为是否必须
    name: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    num: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: false
    },
    state: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: false
    },
    hits: {
        type: Number,
        required: false
    },
    publisher: {
        type: String,
        required: false
    }
});

// 创建数据模型
let goodsModel = mongoose.model("goods", goodsSchema);

module.exports = goodsModel;