const cookie = require("cookie-parser");
const jwt = require("jsonwebtoken");
const jwtKey = "Ecom_MernStack_572";

function verifyToken(req,res,next)
{
    //console.log(req.headers);
    if(req.headers.cookie == undefined)
    {
        res.status(400).json({verify:false});
        return;
    }
    if(!req?.headers?.cookie)
    {
        res.status(400).json({verify:false});
        return;
    }
    const token = req.headers.cookie.split("=")[1];
    //console.log(token);
    jwt.verify(token,jwtKey,(err,data)=>{
        if(err)
        {
            res.status(400).json({verify:false});
            return;
        }
        console.log(data,"Chala");
        res.user=data;
        next();
    })
}

module.exports = verifyToken;