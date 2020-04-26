const foodModel = require("../db/model/foodModel");

// 添加食品
let insertFood = obj => foodModel.insertMany(obj);

// 删除食品
let deleteFood = _id => foodModel.deleteOne(_id);

// 修改食品
let updateFood = (_id, obj) => foodModel.updateOne(_id, obj);

// 查询全部食品
let findAllFood = () => foodModel.find();

// 查询全部食品-正版
let findFoodByPage = async (page, pageSize) => {
    // 按照一定条件查询
    let data = await foodModel.find();

    // 查询到的数据的数量
    let count = data.length;

    // 按照一定条件分页
    let list = await foodModel.find().skip(Number((page - 1) * pageSize)).limit(Number(pageSize));

    return {
        count,
        list
    }
};

// 分类查询
let findFoodByDesc = _id => foodModel.find(_id);

// 关键字查询，通过正则表达式匹配关键字
let findFoodByKeyW = async (keyword, page, pageSize) => {
    let regex = new RegExp(keyword);
    let data = await foodModel.find({
        $or: [{
            name: {
                $regex: regex
            }
        }, {
            desc: {
                $regex: regex
            }
        }]
    });
    let count = data.length;

    // 分页
    let list = await foodModel.find({
        $or: [{
            name: {
                $regex: regex
            }
        }, {
            desc: {
                $regex: regex
            }
        }]
    }).skip(Number((page - 1) * pageSize)).limit(Number(pageSize));

    return {
        count,
        list
    };
}

module.exports = {
    insertFood,
    deleteFood,
    updateFood,
    findAllFood,
    findFoodByPage,
    findFoodByDesc,
    findFoodByKeyW
};