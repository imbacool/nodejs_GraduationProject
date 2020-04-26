const express = require("express");
const db = require("./db/connect");
const bodyParser = require("body-parser");
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
const adminRouter = require("./router/admin");
const studentRouter = require("./router/student");
const teacherRouter = require("./router/teacher");
const studentRouter = require("./router/student");
const studentRouter = require("./router/student");

app.use("/admin", adminRouter);
app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);
app.use("/student", studentRouter);

app.listen(2020, () => {
    console.log("服务器已启动，端口2020");
});