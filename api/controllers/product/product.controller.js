
const e = require('express');
const { query, response } = require('express');
const Product = require('../../models/product.model');

const getPagination = (page, size) => {
    const limit = size ? size : 16;
    const offset = page ? page * limit : 0;
    return { limit, offset };
}
class ProductController {
    // [GET] /api/product
    // get all or by brandname, categoryname, search
    async getAllProduct(req, res, next) {

        const page = req.query.page;
        const size = req.query.size;
        const brandname = req.query.brandname
            ? {
                brandname: req.query.brandname
            } : {};
        const categoryname = req.query.categoryname
            ? {
                categoryname: req.query.categoryname
            } : {};
        const search = req.query.search
            ? {
                $or: [{
                    name:
                    {
                        $regex: req.query.search,
                        $options: 'i',
                    }
                },
                {
                    brandname:
                    {
                        $regex: req.query.search,
                        $options: 'i',
                    }
                },
                {
                    category:
                    {
                        $regex: req.query.search,
                        $options: 'i',
                    }
                }]
            } : {};
        const { limit, offset } = getPagination(page, size);
        const product = await Product.paginate({ ...categoryname, ...brandname, ...search }, { offset, limit })
        if (product) {
            res.send({
                totalItems: product.totalDocs,
                product: product.docs,
                totalPages: product.totalPages,
                currentpage: product.page
            })
        }
        else {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials.",
            });

        };
    }

    // [GET] /api/products/:id
    async getProductById(req, res, next) {
        try {
            const productId = req.params.id;
            const product = await Product.findOne({ _id: productId });
            res.send(product);
        } catch {
            res.status(404).send({ msg: "Product Not Found!" });
        }
    }

    //[Post] /api/product/addProduct
    async addProduct(req, res, next) {
        const { name, categoryname, image, price,
            description, brandname, quantity, weight } = req.body;

        const product = new Product({
            name, categoryname, image, price,
            description, brandname, quantity, weight
        });

        try {
            const saveProduct = await product.save();
            if (saveProduct) {
                res.send({ message: 'Added' });
            }
            else {
                res.send('Error! Check again');
            }
        }
        catch (error) {
            res.send({ message: error });
        }
    }
    //[DELETE] /api/product/deleteProduct/:productID
    async deleteProductByID(req, res, next) {
        try {
            const productDelete = await Product.remove({ _id: req.params.productID });
            if (productDelete) {
                res.send({ message: 'Product deleted' });
            }
            else {
                res.send('Error in deletetion');
            }
        } catch (error) {
            res.send({ message: error });
        }
    }
    //[PATCH] api/product/updateProduct
    async updateProductByID(req, res, next) {
        const { name, categoryname, image, price,
            discription, brandname, quantity, weight } = req.body;

        try {
            const productUpdate = await Product.updateOne({ _id: req.params.productID },
                {
                    $set: {
                        name: name,
                        categoryname: categoryname,
                        image: image,
                        price: price,
                        discription: discription,
                        brandname: brandname,
                        quantity: quantity,
                        weight: weight
                    }
                });
            if (productUpdate) {
                res.send({ message: 'Updated' })
            }
            else {
                res.send('Error! Try again');
            }
        } catch (error) {
            res.send({ message: error });
        }
    }

    // async getProductByBrandName(req, res, next) {
    //     const page = parseInt(req.query.brandname || 1);
    //     const query = await Product.find({ brandname: req.params.brandname })
    //     const product = await query.skip((page - 1) * 16).limit(16);
    //     const totalDocuments = await query.countDocuments();
    //     const totalPage = (totalDocuments / 16)
    //     if (product) {
    //         res.send({
    //             product: product,
    //             pagination: {
    //                 totalPage: totalPage,
    //                 currentPage: page
    //             }
    //         });
    //     }
    //     else {
    //         res.send('Not exits')
    //     }
    // }
}

module.exports = new ProductController;
