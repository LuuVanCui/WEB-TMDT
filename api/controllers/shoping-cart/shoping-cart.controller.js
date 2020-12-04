// const cart = require('../../models/cart.model');
// const product = require('../../models/product.model');

// class ShopingCartController {

//     async getAllProductByUserId(req, res, next) {
//         const allCard = await cart.find({ user_id: req.params.userID });
//         if (allCard) {
//             console.log("Ok");
//             res.json({ allCard });
//         } else {
//             console.log('fail');
//             res.json({ error: 'Wrong user id' });
//         }
//     }

//     async updateCard(req, res, next) {
//         const { user_id, product_id, quantity } = req.body;
//         const updateQuantity = await cart.updateOne({ product_id: product_id, user_id: user_id }, {
//             $set: {
//                 quantity: quantity
//             }
//         });
//         if (updateQuantity) {
//             res.json(updateQuantity);
//         } else {
//             console.log('fail');
//             res.json({ error: 'cannot update' });
//         }
//     }

//     async deleteProductFromCard(req, res, next) {
//         try {
//             const productDelete = await cart.remove({ user_id: req.params.userID, product_id: req.params.productID });
//             res.json(productDelete);
//         } catch (error) {
//             res.json({ message: error });
//         }
//     }
// }
// module.exports = new ShopingCartController;