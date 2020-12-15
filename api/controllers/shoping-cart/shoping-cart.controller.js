const Bill = require('../../models/bill.model');
const Product = require('../../models/product.model');
const User = require('../../models/user.model');

class ShopingCartController {

    //[POST] api/shoping-cart
    async addToCart(req, res, next) {
        const billExist = await Bill.find({ user_id: req.body.user_id });
        if (billExist) {
            const billDetail = {
                product: req.body.product,
                quantity: req.body.quantity
            }
            billExist.push
            const update = await billExist.save();
            if (update) {
                res.send({ message: 'successfully adding to cart' });
            }
            else {
                res.send('Error');
            }
        }
        else {
            console.log(req.body)
            const billDetail = {
                product: req.body.product,
                quantity: req.body.quantity
            }
            const bill = new Bill(
                {
                    user_id: req.body.user_id,
                    total: req.body.total,
                    address: req.body.address,
                    date: req.body.date,
                    billDetail: billDetail,
                    state: false
                }
            );
            const addToCart = await bill.save();
            if (addToCart) {
                res.send({ message: 'Add new to cart' });
            }
            else {
                res.send('Error add to cart');
            }
        }
    }
    async getAllProductByUserId(req, res, next) {
        const allCard = await cart.find({ user_id: req.params.userID });
        if (allCard) {
            console.log("Ok");
            res.json({ allCard });
        } else {
            console.log('fail');
            res.json({ error: 'Wrong user id' });
        }
    }

    async updateCard(req, res, next) {
        const { user_id, product_id, quantity } = req.body;
        const updateQuantity = await cart.updateOne({ product_id: product_id, user_id: user_id }, {
            $set: {
                quantity: quantity
            }
        });
        if (updateQuantity) {
            res.json(updateQuantity);
        } else {
            console.log('fail');
            res.json({ error: 'cannot update' });
        }
    }

    async deleteProductFromCard(req, res, next) {
        try {
            const productDelete = await cart.remove({ user_id: req.params.userID, product_id: req.params.productID });
            res.json(productDelete);
        } catch (error) {
            res.json({ message: error });
        }
    }
}
module.exports = new ShopingCartController;