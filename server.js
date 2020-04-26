const express = require("express");
const db = require("./db/connect");
const bodyParser = require("body-parser");//引入第三方插件，用来解析post请求的参数
const path = require("path");

let app = express();
//设置post
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// 静态资源路径
app.use("/public", express.static(path.join(__dirname, "./public")));

//路由
// const loginRouter = require("./router/01_login+echarts/index");

// app.use("/login", loginRouter);

app.listen(2020, () => {
    console.log("服务器已启动，端口2020");
});