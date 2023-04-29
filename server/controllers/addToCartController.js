//const cartUpdateItem = require("../services/cartUpdateItem");
//const newUserCart = require("../services/newUserCart");
//const cartPush = require("../services/cartPush");
const cartUsingUserProd = require("../sqlservices/cartUsingUserProd");
const {cartUsingUser,cartMailElementMatch,cartUpdateItem,cartPush,deleteItem} = require("../sqlservices/cartUsingUser");
// const cartUsingUser = require("../services/cartUsingUser");
// const cartMailElementMatch = require("../services/cartMailElementMatch");
const getProdById = require("../sqlservices/getProdById");

async function addToCart_controller(req,res)
{
	// if(req.session.user && req.session.user.isVerified && req.session.isLoggedIn)
	// {

		let productId = parseInt(req.params.prodID);
		let reqProd;
		//console.log(req.body,"addtoCartCOntroller");
		
		reqProd = await getProdById(productId);
		if(reqProd.length)
		{
			let userCart = await cartUsingUser(req.body.mail);
			if(userCart.length)
			{
				let itemExist = await cartMailElementMatch(req.body.mail,productId);
				if(itemExist.length)
				{
					// let cartItemarr = userCart[0].cartItem;
					// for(let i=0;i<cartItemarr.length;i++)
					// {
					// 	if(cartItemarr[i].id === productId)
					// 	{
					// 		cartItemarr[i].cartQuantity++;
					// 		break;
					// 	}
					// }
					//let cartItem = await cartUsingUserProd(req.session.user.mail,prod)
					if(reqProd[0].quantity>0)
					{
						let result = await cartUpdateItem(1,req.body.mail,productId);
						res.json({status:200,msg:"Added to cart"});
					}
					else{
						res.json({status:404,msg:"Out of Stock"});
					}
				}
				else
				{
					// reqProd.cartQuantity=1; 
					// let result = await cartPush(req.session.user.email,reqProd);
					if(reqProd[0].quantity>0)
					{
						let result = await cartPush(req.body.mail,productId);
						res.json({status:200,msg:"Added to cart"});
					}
					else{
						res.json({status:404,msg:"Out of Stock"});
					}
				}
			}
			else
			{
				// let arr = [];
				// reqProd.cartQuantity = 1;
				// arr.push(reqProd);
				// newUserCart(req.session.user.email,arr);
				if(reqProd[0].quantity)
				{
					let result = await cartPush(req.body.mail,productId);
					res.json({status:200,msg:"Added to cart"});
				}
				else{
					res.json({status:404,msg:"Out of Stock"});
				}
			}
		}
	// }
	// else
	// {
	// 	res.redirect("/login");
	// }
}

module.exports = addToCart_controller;