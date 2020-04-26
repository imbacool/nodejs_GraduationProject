const goodsModel = require("../../db/model/goodsModel");

// 添加商品
let insertGoods = obj => goodsModel.insertMany(obj);

// 删除商品
let deleteGoods = _id => goodsModel.deleteOne(_id);

// 修改商品
let updateGoods = (_id, obj) => goodsModel.updateOne(_id, obj);

// 修改商品状态
let changeState = (_id, state) => goodsModel.updateOne(_id, state);

// 查询商品(分页)
let findGoodsByPage = async (page, pageSize) => {
    // 按照一定条件查询
    let data = await goodsModel.find();
    // 查询到的数据的数量
    let count = data.length;
    // 按照一定条件分页
    let list = await goodsModel.find().skip(Number((page - 1) * pageSize)).limit(Number(pageSize));

    return {
        count,
        list
    }
};

// 查询一个商品
let findGoodsById = _id => goodsModel.findOne(_id);

module.exports = {
    insertGoods,
    deleteGoods,
    updateGoods,
    changeState,
    findGoodsByPage,
    findGoodsById,
};