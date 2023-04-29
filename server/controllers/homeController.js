const getProd = require("../sqlservices/getProd");

 async function home_controller(req,res){
    let products = await getProd(0,8);
    res.json({products:products,status:true});
    // if(req.session.user.role === "user")
    // {
    //     res.json({username:req.session.user.name,products:products,size:"4",status:true});
    // }
    // else if(req.session.user.role === "seller")
    // {
    //     res.json({status:false,msg:"seller"});
    // }
}

module.exports = home_controller;