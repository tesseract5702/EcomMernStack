function logout_controller(req,res)
{
    res.clearCookie("JWT");
    console.log("logoutCOntroller")
	res.json({msg:"LoggedOut"});
}

module.exports = logout_controller;