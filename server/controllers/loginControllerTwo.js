async function login_controller_two(req,res)
{
    res.send("login failed");
    //res.render("login",{errorlogin:""});
}

module.exports = login_controller_two;