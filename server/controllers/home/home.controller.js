
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
            product_discription, brand_id, product_quantity, product_weight } = req.body;
        const product = new Product({
            product_id, product_name, category_id, product_img, product_price,
            product_discription, brand_id, product_quantity, product_weight
        });

        try {
            const saveProduct = await product.save();
            res.json(saveProduct);
        }
        catch {
            res.json({ message: 'Error when add product!' });
        }
    }
    async deleteProductByID(req, res, next) {
        try {
            const productDelete = await Product.remove({ product_id: req.params.productID });
            res.json(productDelete);
        } catch (error) {
            res.json({ message: error });
        }
    }
    async updateProductByID(req, res, next) {
        const { product_name, category_id, product_img, product_price,
            product_discription, brand_id, product_quantity, product_weight } = req.body;
        try {
            const productUpdate = await Product.updateOne({ product_id: req.params.productID },
                {
                    $set: {
                        product_name: product_name,
                        category_id: category_id,
                        product_img: product_img,
                        product_price: product_price,
                        product_discription: product_discription,
                        brand_id: brand_id,
                        product_quantity: product_quantity,
                        product_weight: product_weight
                    }
                });
            res.json(productUpdate);
        } catch (error) {
            res.json({ message: error });
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
    async getProductByCategoryId(req, res, next) {
        try {
            const product = await Product.findOne({ category_id: req.params.productId });
            res.json(product);
        } catch (error) {
            res.json({ message: 'Error get product!' });
        }
    }
    async getProductByBrandId(req, res, next) {
        try {
            const product = await Product.findOne({ brand_id: req.params.brandId });
            res.json(product);
        } catch (error) {
            res.json({ message: 'Error get brand!' });
        }
    }
}

module.exports = new HomeController;
