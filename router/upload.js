const express = require('express')
const multer = require('multer')
const fs = require('fs')
const path = require('path')

const upload = multer({})
const router = express.Router()

router.post('/img', upload.single('img'), (req, res) => {
    let { buffer, mimetype, size } = req.file
    // 判断图片大小(5M)
    if (size >= 5242880) {
        return res.send({ err: -1, msg: '只能上传小于5M的图片！' })
    }
    // 限制文件类型
    let typs = ['jpg', 'gif', 'png', 'jpeg']
    let extName = mimetype.split('/')[1]
    if (typs.indexOf(extName) === -1) {
        return res.send({ err: -2, msg: '只能上传类型为jpg/jpeg/png/gif的图片！' })
    }
    // 将文件写到静态资源目录下
    let name = Date.now();
    fs.writeFile(path.join(__dirname, `../public/img/${name}.${extName}`), buffer, (err) => {
        if (err) {
            res.send({ err: -3, msg: '图片上传失败请重试！' })
        } else {
            res.send({ err: 0, msg: '图片上传成功', path: `/public/img/${name}.${extName}` })
        }
    })
})

module.exports = router