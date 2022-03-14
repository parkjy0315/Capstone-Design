var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var firebase = require("firebase");
var admin = require("firebase-admin");
var firestore = require("firebase-admin/firestore");

var serviceAccount = require("./hscoin-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = firestore.getFirestore();

//signUpWithEmailPasswd("test2@a.com","123456");
//signInWithEmailPasswd("test@a.com", "123456");
//logout();
db_test();

async function db_test() {
  db.collection("node_firebase_test1").doc("0313").set({
    name: "node.js second",
    date: "0313",
    person: "jk"
  });
}

async function signInWithEmailPasswd(userid, userpw) {
  firebase.auth().signInWithEmailPassword(userid, userpw)
      .then((userCredential) => {
          console.log("successfully fetched user data: ");
          var user = userCredential.user;
      })
      .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("error loggin : ", errorMessage);
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
          console.log("error signup : ", errorMessage);
      })
}

async function logout(){
  firebase.auth().signOut().then((userCredential) => {
    console.log("logout success");
  }).catch((error) => {
    var errorMessage = error.message;
    console.log("error loggout : ", errorMessage);
  })
}

app.listen(3500,()=>{
  console.log(`3500 번호로 서버 실행중...`);
});