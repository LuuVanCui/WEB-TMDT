
const Product = require('../../models/product.model');

class HomeController {

    // [GET] /home
    async getAllProduct(req, res, next) {
        const allProduct = await Product.find();
        console.log(allProduct);

        if (allProduct) {
            console.log('Get all product successfully!');
            res.json(allProduct);
        }

        res.json({ message: 'No product in database!' });
    }

    async addProduct(req, res, next) {
        const { product_id, product_name, category_id, product_img, product_price,
            product_discription, product_supplier, product_quantity, product_weight, product_review } = req.body;
        const product = new Product({
            product_id, product_name, category_id, product_img, product_price,
            product_discription, product_supplier, product_quantity, product_weight, product_review
        });

        try {
            const saveProduct = await product.save();
            res.json(saveProduct);
        }
        catch {
            res.json({ message: 'Hong roi' });
        }
    }

    // getProductById(req, res, next) {
    //     console.log('sdfs');
    //     Product.findById({_id: req.params.productId})
    //         .then(product => {
    //             console.log('Get product successfully!');
    //             res.json(product);
    //         })
    //         .catch(() => {
    //             console.log('Get product error!');
    //             res.json({message: 'Error get product!'});
    //         });
    // }
    async getProductById(req, res, next){
        const product = await Product.findOne({product_name: req.params.productId});
        try {
            console.log(product)
            res.json(product);
        } catch (error) {
            res.json({message: 'No exist!'});
        }
    }
}

module.exports = new HomeController;
