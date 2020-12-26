const Product = require('../../models/product.model');

const getPagination = (page, size) => {
    const limit = size ? size : 4;
    const offset = page ? page * limit : 0;
    return { limit, offset };
}
class ProductController {
    // [GET] /api/products
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
                    categoryname:
                    {
                        $regex: req.query.search,
                        $options: 'i',
                    }
                }]
            } : {};
        const { limit, offset } = getPagination(page - 1, size);
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

    //[Post] /api/products/addProduct
    async addProduct(req, res, next) {
        // const { name, categoryname, image, price,
        //     description, brandname, quantity, weight } = req.body;
        console.log(req.body);
        const product = new Product();
        product.name = req.body.name;
        product.categoryname = req.body.categoryname;
        product.image = req.body.image;
        product.price = req.body.price;
        product.description = req.body.description;
        product.brandname = req.body.brandname;
        product.quantity = req.body.quantity;
        product.weight = req.body.weight;
        const saveProduct = await product.save();
        if (saveProduct) {
            res.send(saveProduct);
        }
        else {
            res.send('Error! Check again');
        }

    }
    //[DELETE] /api/products/deleteProduct/:productID
    async deleteProductByID(req, res, next) {
        try {
            const productDelete = await Product.remove({ _id: req.params.productID });
            if (productDelete) {
                res.send(productDelete);
            }
            else {
                res.send('Error in deletetion');
            }
        } catch (error) {
            res.send({ message: error.message });
        }
    }
    //[PATCH] api/products/updateProduct/:productID
    async updateProductByID(req, res, next) {
        const { name, categoryname, image, price,
            description, brandname, quantity, weight } = req.body;
        try {
            const productUpdate = await Product.updateOne({ _id: req.params.productID },
                {
                    $set: {
                        name: name,
                        categoryname: categoryname,
                        image: image,
                        price: price,
                        description: description,
                        brandname: brandname,
                        quantity: quantity,
                        weight: weight
                    }
                });
            if (productUpdate) {
                res.send(productUpdate);
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
