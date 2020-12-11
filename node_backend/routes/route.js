module.exports=(app,js,tokenJwt)=>{

    app.post("/home",js,(req,res)=>{
        if(req.headers.authorization===req.body.authorization){
            res.status(200).send(req.headers);
        }else{
            res.status(401).json({});
        }
    });

    const authJwt=(req,res,next)=>{
        const header_autho=req.headers.authorization;
        if(header_autho){
            var d = tokenJwt.verify(header_autho,'shhhhh234567890sdfghjk2345678');
            if(d.user!==null){
                next();
            }else{
                res.status(401);
            }
        }else{
            res.sendStatus(403);
        }
    }


    app.get("/home",authJwt,(req,res)=>{
        res.status(200).json({"data":"hello"});
    });


    app.post("/post",js,(req,res)=>{
        //console.log("login:"+req.body.login+" password :"+req.body.password);

        if(req.body.login==="test" && req.body.password==="test"){

            //get the token
            var tk = tokenJwt.sign(
                {user:req.body.login,password:req.body.password}
                ,
                 'shhhhh234567890sdfghjk2345678'
                );
            
            //send the token
            res.status(200).json({
                idToken: tk,
            });

        }else{
            res.status(401).send("Error");
        }

    });




}