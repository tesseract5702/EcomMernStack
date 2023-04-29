const jwt = require("jsonwebtoken");
const sendMail = require('../methods/sendMail');
const getUser = require("../sqlservices/getUser");
const putUser = require("../sqlservices/putUser");
const jwtKey = "Ecom_MernStack_572"

async function adduser_controller(req,res)
{
    let { username, mail, password, role} = req.body;
	let data = await getUser(req);
	if(data.length)
	{
		res.json({status:false,err:"User already exist!",msg:""});
	}
	else
	{
		try
		{
			let result = await putUser(req);
			let userData = await getUser(req);
			sendMail(mail,userData[0].mailToken,function(err,data)
				{
					if(err)
					{
						res.json({status:false,err:"Something went wrong",msg:""});
						return
					}
					req.session.isLoggedIn=true;
					req.session.user=userData[0];
					
					//console.log(req.session.user.role,req.session.user.role==="seller");
					if(req.session.user.role === "seller")
					{
						jwt.sign({},jwtKey,(err,token)=>{
							if(err)
							{
								res.json({status:-1,err:err});
							}
							else
							{
								res.json({status:true,msg:"Seller Home",mail:userData[0].email,name:userData[0].name,role:userData[0].role,token:token});
								return;
							}
						});
						//console.log("Seller Home chala");
					}
					else{
						jwt.sign({},jwtKey,(err,token)=>{
							if(err)
							{
								res.json({status:-1,err:err});
							}
							else
							{
								res.json({status:true,msg:"user Home",mail:userData[0].email,name:userData[0].name,role:userData[0].role,token:token});
								return;
							}
						});
					}
			})
		}
		catch(err)
		{
			res.json({status:false,err:"Something went wrong!"});
		}
	}
}

module.exports = adduser_controller;