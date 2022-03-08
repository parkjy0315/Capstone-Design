module.exports = (app,fs)=>{
    //localhost:3000
    
    app.get('/getMember/:userid/:password',(req,res)=>{
        fs.readFile(__dirname + "/../data/member.json","utf-8",(err,data)=>{
            const member = JSON.parse(data);
            if(member[req.params.userid]){
                if(res.json(member[req.params.userid])){
                    const pw = member[req.params.userid]['password'];
                    console.log(`pw 는 ${pw}`);
                }else{
                    console.log(`getMember에서 오류발생`);    
                }
            }else{
                console.log(`잘못된 로그인요청 기록${req.params.userid}`);
            }
        });
    })

    app.post('/joinMember/:userid',(req,res)=>{
        const result = {};
        const userid = req.params.userid;
        //console.log(`body에 오는것 추적 ${req.body}`);
        console.log(`body를 stringify로? ${JSON.stringify(req.body)}`)
        if(!req.body["password"] || !req.body['name']){
            result["success"] = 100;
            result["msg"] = "invalid request";
            res.json(result);
            return false;
        }
        fs.readFile(__dirname + "/../data/member.json","utf-8",(err,data)=>{
            const member = JSON.parse(data);
            if(member[userid]){
                result["success"] = 101;
                result["msg"] = "duplicated request";
                res.json(result);
                return false;
            }
            console.log('여기들어와야하는뎅');
            member[userid] = req.body;
            fs.writeFile(__dirname+'/../data/member.json',JSON.stringify(member,null,'\t'),'utf-8',(err,data)=>{
                result["success"] = 200;
                result["msg"] = "join success";
                res.json(result);
            });
        });
    });
/*
app.put('/updateMember/:userid',(req,res)=>{
    const result={};
    const userid = req.params.userid;
    if(!req.body["password"] || !req.body["name"]){
        result["success"] = 100;
        result["msg"] = "invalid request";
        res.json(result);
        return false;
    }
    fs.writeFile(__dirname+"/../data/member.json",JSON.stringify(member,null,'\t'),'utf-8',(err,data)=>{
        console.log(data);
        const member = JSON.parse(data);
        member[userid] = req.body;
        fs.readFile(__dirname +"/../data/member.json",JSON.stringify(member,null,'\t'),'utf-8',(err,data)=>{
            result["success"] = 200;
            result["msg"] = "success";
            res.json(result);
        });
    });
});
*/

/*
app.delete('/deleteMember/:userid',(req,res)=>{
    fs.readFile(__dirname+"/../data/member.json",'utf-8',(err,data)=>{
        const userid = req.params.userid;
        const member = JSON.parse(data);
        delete member[userid];
        fs.writeFile(__dirname+"/../data/member.json",JSON.stringify(member,null,'\t'),'utf-8',(err)=>{
            
        })
    });
})
*/

}


