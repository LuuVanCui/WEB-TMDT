
const Product = require('../../models/product.model');

class ProductController {

    // [GET] /api/product
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
        // const { name, categoryname, image, price,
        //     description, brandname, quantity, weight } = req.body;
        // console.log(name, categoryname, image, price, description, brandname, quantity, weight);

        const product = new Product();
        product.name = req.body.name,
            product.categoryname = req.body.categoryname,
            product.image = req.body.image ? req.body.image : [],
            product.price = req.body.price,
            product.description = req.body.description,
            product.brandname = req.body.brandname,
            product.quantity = req.body.quantity,
            product.weight = req.body.weight,
            product.review = req.body.review ? req.body.review : []
        try {
            const saveProduct = await product.save();
            res.send(saveProduct);
        }
        catch (err) {
            console.log(err);
            res.send({ message: 'Error when add product!' });
        }
    }
    async updateReview(req, res, next) {
        const product = await Product.findById(req.params.productID);
        if (product) {
            const review = {
                name: req.body.namereview,
                comment: req.body.comment,
            };
            product.review.push(review);
            const updatedProduct = await product.save();
            res.status(201).json(updatedProduct);
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    }
    async deleteProductByID(req, res, next) {
        try {
            const productDelete = await Product.remove({ id: req.params.productID });
            res.json(productDelete);
        } catch (error) {
            res.json({ message: error });
        }
    }
    async updateProductByID(req, res, next) {
        const { name, categoryname, image, price,
            discription, brandname, quantity, weight } = req.body;

        try {
            const productUpdate = await Product.updateOne({ id: req.params.productID },
                {
                    $set: {
                        name: name,
                        categoryname: categoryname,
                        image: image,
                        price: price,
                        discription: discription,
                        brandname: brandname,
                        quantity: quantity,
                        weight: weight,
                    }
                });

            console.log(productUpdate);
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
            const product = await Product.findOne({ categoryname: req.params.productname
             });
            res.json(product);
        } catch (error) {
            res.json({ message: 'Error get product!' });
        }
    }
    async getProductByBrandId(req, res, next) {
        try {
            const product = await Product.findOne({ brandname: req.params.brandname });
            res.json(product);
        } catch (error) {
            res.json({ message: 'Error get brand!' });
        }
    }
}

module.exports = new ProductController;
