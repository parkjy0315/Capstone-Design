//jsonlink.com json 문법 검증

const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
//firebase 이식

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var firebase = require("firebase");
var admin = require("firebase-admin");
var firestore = require("firebase-admin/firestore");
var auth = require("firebase-admin/auth");
var serviceAccount = require("./hscoin-firebase-adminsdk.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const login = auth.getAuth();
const db = firestore.getFirestore();

async function signInWithEmailPasswd(userid, userpw) {
    firebase.auth().signInWithEmailPassword(userid, userpw)
        .then((userCredential) => {
            var user = userCredential.user;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        })
}

async function signUpWithEmailPasswd(userid, userpw){
    firebase.auth().createUserWithEmailAndPassword(userid, userpw)
        .then((userCredential) => {
            var user = userCredential.user;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        })
}

//회원가입 firebase 이용
async function join(userid,userpw,username,useremail,userphone,year,month,day) {
    
    db.collection("user").doc("userid").set({
        userid: userid,
        userpw: userpw,
        username: username,
        useremail: useremail,
        userphone: userphone,
        //usergender: usergender,
        year: year,
        month: month,
        day: day
    });
}

const module1 = require('./router/module1')(app,fs,admin,firestore,serviceAccount,join);


app.listen(port,()=>{
    console.log(`${port}번호로 서버 실행중...`);
});