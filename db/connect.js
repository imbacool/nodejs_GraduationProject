const mongoose = require('mongoose');
let url = 'mongodb://localhost:27017/InfoManageSystem';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

db.on('error', () => {
    console.log('数据库连接失败');
});
db.once('open', () => {
    console.log('数据库已连接');
});