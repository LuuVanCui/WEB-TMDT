const Order = require('../../models/bill.model');
class orderController {
    // [get] /api/orders/mine/:userID
    async getAllOrderByUserId(req, res, next) {
        const all = await Order.find({ user_id: req.params.userID });
        if (all) {
            res.json(all);
        } else {
            console.log('Fail');
            res.json({ error: 'Wrong user id' });
        }
    }
    //[POST] api/orders/createOrders
    async createBill(req, res, next) {
        const bill = new Order();
        bill.user_id = req.body.user_id;
        bill.total = req.body.total;
        bill.address = req.body.address;
        bill.phone = req.body.phone;
        bill.billDetail = req.body.billDetail;
        const addToCart = await bill.save();
        if (addToCart) {
            res.send(addToCart);
        }
        else {
            res.send('Error create bill');
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
    //[patch] /api/orders/admin/:orderID
    async updateStateOrderForAdmin(req, res) {
        const updateState = await Order.updateOne(
            { _id: req.params.orderID },
            {
                $set: {
                    deliveryStatus: "Chờ vận chuyển",
                }
            });
        if (updateState) {
            res.json(updateState);
        } else {
            console.log('fail');
            res.json({ error: 'cannot update' });
        }
    }

    //lấy tất cả đơn hàng [get] /api/orders/admin/all
    async getAllOrder(req, res, next) {
        const all = await Order.find();
        if (all) {
            res.json(all);
        } else {
            console.log('Fail');
            res.json({ error: 'Wrong user id' });
        }
    }

    //lấy đơn hàng đang chờ xửa lý  /api/orders/admin/waiting
    async getOrderIsWaiting(req, res, next) {
        console.log("vao toi");
        const all = await Order.find({ deliveryStatus: 'Đang chờ xử lý' });
        if (all) {
            res.json(all);
        } else {
            console.log('Fail');
            res.json({ error: 'Wrong user id' });
        }
    }
    // lấy các đơn hàng đã hủy  /api/orders/admin/cancel
    async getOrderIsCancel(req, res, next) {
        const all = await Order.find({ deliveryStatus: "Đã hủy" });
        if (all) {
            res.json(all);
        } else {
            console.log('Fail');
            res.json({ error: 'Wrong user id' });
        }
    }

}
module.exports = new orderController;
