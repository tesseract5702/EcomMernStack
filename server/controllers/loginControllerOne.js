const getUser = require("../sqlservices/getUser");
const jwt = require("jsonwebtoken");
const jwtKey = "Ecom_MernStack_572";
const cookie = require('cookie-parser')
async function login_controller(req,res)
{
	//console.log(req.body);
    let user = await getUser(req);
	//console.log(user);
	if(user.length===0)
	{
		//res.redirect("/addUser");
		res.json({status:false,err:"No user found!"});
		return;
	}
	if(user[0].role === "admin")
	{
		if(user[0].password === req.body.password)
		{
			// req.session.isLoggedIn = true;
			// req.session.user = user[0];
			res.json({status:true,user:user[0]});
			//res.redirect("/admin");
			return;
		}
		else
		{
			res.json({status:false,err:"Password does not match"})
			//res.render("login",{errorlogin:"Username and Password doesn't match"});
			return;
		}
	}
	else if(user[0].role === "seller")
	{
		if(user[0].password === req.body.password)
		{
			// req.session.isLoggedIn = true;
			// req.session.user = user[0];
			res.json({status:true,msg:"Seller bhaiya kitna kamaoge?"});
			//res.redirect("/seller");
			return;
		}
		else
		{
			res.json({status:false,err:"Password does not match"});
			//res.render("login",{errorlogin:"Username and Password doesn't match"});
			return;
		}
	}
	if(user.length) 
	{
		if(user[0].password === req.body.password)
		{
			if(user[0].isVerified)
			{
				// req.session.isLoggedIn=true;
				// req.session.user = user[0];
				jwt.sign({mail:req.body.mail,role:user[0].role},jwtKey,(err,token)=>{
					if(err)
					{
						res.json({status:-1,err:err});
					}
					else{
						res.cookie('JWT',token,{
							path:'/',
							expires: new Date(Date.now() + 30000 *1000),
							httpOnly:true,
							sameSite:'lax'
						})
						res.json({status:true,mail:user[0].email,role:user[0].role,name:user[0].name});
					}
				})
				//res.redirect("/");
				return;
			}
			else{
				res.json({status:true,msg:"Verify first"});
				//res.render("notVerified");
				return;
			}
		}
		else if(user[0].password !== req.body.password)
		{
			res.json({status:false,err:"Password does not match"});
			return;
			//res.render("login",{errorlogin:"Username and Password doesn't match"});
		}
		
	}
	else
	{
		res.json({status:false,err:"User not found :("});
		return;
		//res.render("login",{errorlogin:"User not found!"});
	}
}

module.exports = login_controller;