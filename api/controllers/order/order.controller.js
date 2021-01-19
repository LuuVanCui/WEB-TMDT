const Order = require('../../models/bill.model');
const sendMail = require('../../sendEmail');
class orderController {
    // [get] /api/orders/mine/:userID
    async getAllOrderByUserId(req, res, next) {
        const all = await Order.find({ user_id: req.params.userID });
        if (all) {
            res.send(all);
        } else {
            res.status(404).send({ error: 'Wrong user id' });
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
            res.send('Tạo đơn hàng không thành công');
        }
    }
    // [patch] api/orders/shipper/:orderID/:status
    async updateStateOrderForShipper(req, res) {
        console.log("tim thay");
        const id = req.params.orderID;
        const status = req.params.status;
        const updateState = null;
        if (status == 'NhanDon') {
            updateState = await Order.updateOne({ _id: id }, {
                $set: {
                    deliveryStatus: "Đang giao hàng",
                    // deliveredAt: Date.now()
                }
            });
        }
        else if (status == 'DaGiao') {
            updateState = await Order.updateOne({ _id: id }, {
                $set: {
                    deliveryStatus: "Đã giao thành công",
                    deliveredAt: Date.now()
                }
            });
        }
        else if (status == 'Huy') {
            updateState = await Order.updateOne({ _id: id }, {
                $set: {
                    deliveryStatus: "Giao không thành công",
                    deliveredAt: Date.now()
                }
            });
        }
        if (updateState) {
            res.json(updateState);
        } else {
            console.log('fail');
            res.json({ error: 'cannot update' });
        }
    }
    //[patch] /api/orders/admin/:orderID
    async updateStateOrderForAdmin(req, res) {
        console.log("Chờ vận chuyển");
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
    // patch /api/orders/admin/cancelOrder/'+ orderID
    async orderCancel(req, res) {
        const updateState = await Order.updateOne(
            { _id: req.params.orderID },
            {
                $set: {
                    deliveryStatus: "Đã hủy",
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
        const all = await Order.find({ deliveryStatus: 'Đang chờ xử lý' });
        if (all) {
            console.log("getOrderIsWaiting");
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

    //get order by orderID  [get] /api/orders/admin/orderDetail/:orderID
    async getOrderById(req, res, next) {
        const order = await Order.findOne({ _id: req.params.orderID }).populate({ path: 'billDetail.product', model: 'product' });
        if (order) {
            res.json(order);
        }
        else {
            res.json({ error: 'Wrong order id' });
        }
    }

<<<<<<< HEAD
    // [POST] - /api/orders/sendmail
    sendMailOrder(req, res, next) {
        const { userInfo, cartItems } = req.body;
        const sub = 'Đơn hàng';

        let htmlContent = `<p>Chào ${userInfo.name},</p>
        <p>Cảm ơn bạn đã đặt hàng tại NS3AE. Dưới đây là chi tiết đơn hàng của bạn.</p>
        <table style="border: 1px solid black; border-collapse: collapse;">
            <thead>
                <tr>
                <th scope="col" style="border: 1px solid black; border-collapse: collapse;">Hình ảnh</th>
                <th scope="col" style="border: 1px solid black; border-collapse: collapse;">Tên sản phẩm</th>
                <th scope="col" style="border: 1px solid black; border-collapse: collapse;">Đơn giá</th>
                <th scope="col" style="border: 1px solid black; border-collapse: collapse;">Số lượng</th>
                <th scope="col" style="border: 1px solid black; border-collapse: collapse;">Thành tiền</th>
                </tr>
            </thead>
            <tbody>`;

        for (let item of cartItems) {
            htmlContent += `
            <tr>
                <td style="border: 1px solid black; border-collapse: collapse;"><img src="${item.image}" height="100"></th>
                <td style="border: 1px solid black; border-collapse: collapse;">${item.name}</td>
                <td style="border: 1px solid black; border-collapse: collapse;">${item.price}</td>
                <td style="border: 1px solid black; border-collapse: collapse;">${item.qty}</td>
                <td style="border: 1px solid black; border-collapse: collapse;">${item.price * item.qty}đ</td>
            </tr >
            `
        }

        htmlContent += `
        </tbody></table>
        <p>Cảm ơn bạn đã tin tưởng NS3AE. Chúc bạn 1 ngày vui vẻ!</p>
        <p>NS3AE</p>`;

        try {
            sendMail(userInfo.email, sub, htmlContent);
            res.send({ message: 'Send mail successfully!' });
=======
    //lay list don hang
    // [get] api/orders/shipper/:status
    async getOrder(req, res, next) {
        try {
            const status = req.params.status;
            if (status !== null) {
                console.log(status);
                // const order = null;
                if (status == "ChoGiao") {
                    const order = await Order.find({ deliveryStatus: "Chờ vận chuyển" }).populate({ path: 'user_id', model: 'user' });

                    const orderResult = [];
                    for (let item of order) {
                        const bill = {
                            _id: item._id,
                            userInfo: { name: item.user_id.name },
                            address: item.address,
                            total: item.total
                        }
                        orderResult.push(bill);
                    }

                    if (order) {
                        res.json(orderResult);
                    }
                    else {
                        res.json({ error: 'Sai Id hoặc status' });
                    }

                }
            }
            else {
                res.json({ error: 'Không có data' });
            }
>>>>>>> b764374... luu thay doi
        } catch (error) {
            res.send({ message: error.message });
        }
    }
}
module.exports = new orderController;
