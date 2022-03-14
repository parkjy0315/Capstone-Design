module.exports = (app,fs,admin,firestore,serviceAccount,join)=>{
    
    
    //app.post('/joinMember/:userid/:userpw/:username/:useremail/:userphone/:userWalletDist',(req,res)=>{
    app.post('/joinMember/:userid',(req,res)=>{
        //요청온 컴퓨터의 사양
        const userAgent = req.header('user-agent');
        console.log(userAgent);
        console.log(req.body)
        const userid = req.params.userid;
        const userpw = req.body["password"];
        const username = req.body["name"];
        const useremail = req.body["useremail"];
        const userphone = req.body["userphone"];
        //const usergender = req.body["usergender"];
        const year = req.body["year"];
        const month = req.body["month"];
        const day = req.body["day"];
        join(userid,userpw,username,useremail,userphone,year,month,day);
    });

    app.post('/loginMember/:userid',(req,res)=>{
        //요청온 컴퓨터의 사양
        const userAgent = req.header('user-agent');
        console.log(userAgent);
        console.log(req.body)
        const userid = req.params.userid;
        const userpw = req.body["password"];
        const username = req.body["name"];
        const useremail = req.body["useremail"];
        const userphone = req.body["userphone"];
        //const usergender = req.body["usergender"];
        const year = req.body["year"];
        const month = req.body["month"];
        const day = req.body["day"];
        join(userid,userpw,username,useremail,userphone,year,month,day);
    });

}
