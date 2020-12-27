const Order = require('../../models/bill.model');
class orderController {
    // [get] /api/order/mine/:userID
    async getAllOrderByUserId(req, res, next) {

        const all = await Order.find({ user_id: req.params.userID });

        if (all) {
            console.log("tim thay");
            res.json(all);
        } else {
            console.log('Fail');
            res.json({ error: 'Wrong user id' });
        }
    }

    async updateStateOrderForShipper(req, res) {
        console.log("tim thay");
        const { _id } = req.body;
        const updateState = await Order.updateOne({ _id: _id }, {
            $set: {
                deliveryStatus: "Đã giao",
                deliveredAt: Date.now()
            }
        });
        if (updateState) {
            res.json(updateState);
        } else {
            console.log('fail');
            res.json({ error: 'cannot update' });
        }
    }

}
module.exports = new orderController;