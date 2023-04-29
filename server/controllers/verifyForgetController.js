const getUserByMailToken = require("../sqlservices/getUserByMailToken");

async function verify_forget_controller(req,res)
{
    let {token} = req.params;
	let user = await getUserByMailToken(token);
	req.session.user = user[0];
	//console.log(user,"verifyCntrl")
	req.session.isLoggedIn=true;
	req.session.user.isVerifiedForget=1;
	if(user.length)
	{	
		res.redirect("/resetPass");
	}
}

module.exports = verify_forget_controller;