const express = require('express')
const bodyParser = require('body-parser')
const path = require("path");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("public"));
var post = 3000 
app.get('/', function (req, res) {
  res.send('tạo sẽ sever thành công')
})
 
app.listen(post,function(){
    console.log("chạy thành công cổng"+ post);
})