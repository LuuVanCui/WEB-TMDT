const Category = require('../../models/category.model');

class CategoryController {

    // [GET] - /api/category
    async getAllCategory(req, res) {
        try {
            const categories = await Category.find();
            if (categories) {
                res.send(categories);
            } else {
                res.status(401).send({ error: 'Invalid category' });
            }
        } catch (error) {
            res.send({ msg: error.message });
        }
    }

    // [GET] - /api/category/:id
    async getSpecificCategory(req, res) {
        try {
            const category = await Category.findOne({ _id: req.params.id });
            if (category) {
                res.send(category);
            } else {
                res.status(401).send({ error: 'Invalid category' });
            }
        } catch (error) {
            res.send({ msg: error.message });
        }
    }

    // [POST] - /api/category/add
    async addCategory(req, res) {
        const { name, description } = req.body;
        try {
            const category = new Category({ name, description });
            const saveCategory = await category.save();
            if (saveCategory) {
                res.send({ message: "Add category successfully!", data: category });
            }
        } catch (error) {
            res.send({ message: error.message });
        }
    }

    // [PATCH] - /api/category/:id
    async updateCategory(req, res) {
        const { name, description } = req.body;
        try {
            const updatedCategory = await Category.updateOne({ _id: req.params.id }, {
                $set: { name, description }
            });
            if (updatedCategory) {
                res.send({ message: 'Update category successfully!', data: updatedCategory });
            } else {
                res.status.send({ message: 'Id invalid!' });
            }
        } catch (error) {
            res.send({ message: error.message });
        }
    }

    // [DELETE] - /api/category/:id
    async deleteCategory(req, res) {
        try {
            const categoryId = req.params.id;
            const deleteCategory = await Category.deleteOne({ _id: categoryId });
            res.send(deleteCategory);
        } catch (error) {
            res.send({ msg: error.message });
        }
    }
}

module.exports = new CategoryController;
