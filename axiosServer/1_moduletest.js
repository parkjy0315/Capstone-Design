//jsonlink.com json 문법 검증

const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const module1 = require('./router/module1')(app,fs);


app.listen(port,()=>{
    console.log(`${port}번호로 서버 실행중...`);
});