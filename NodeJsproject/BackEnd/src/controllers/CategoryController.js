// const { Category } = require('../models')

// module.exports = {
//     async getCategoryByName(req, res) {
//         try {
//             let categoryName = req.params.name;
//             let categoryRetrieve = await Category.findOne({
//                 where: {
//                     name: categoryName
//                 }
//             })
//             res.send(categoryRetrieve)
//         } catch (err) {
//             res.status(500).send({
//                 error: 'Sorry, an error occured when trying to fetch a Category.'
//             })
//         }
//     },
//     async getCategory(req, res) {
//         try {
//             let categories = await Category.findAll()
//             res.send(categories)
//         } catch (err) {
//             res.status(500).send({
//                 error: 'Sorry, an error occured when trying to fetch the categories.'
//             })
//         }
//     },
//     async createCategory(req, res) {
//         try {
//             let category = await Category.create(req.body)
//             res.send(category)
//         } catch (err) {
//             res.status(500).send({
//                 error: 'Sorry, an error occured when trying to create a category.'
//             })
//         }
//     },
//     async updateCategory(req, res) {
//         try{
//             await Category.update(req.body, {
//                 where: {
//                     id: req.body.id
//                 }
//             })
//             res.send(req.body)
//         } catch (err) {
//             res.status(500).send({
//                 error: 'Sorry, an error occured when trying to update a category.'
//             })
//         }
//     },
//     async deleteCategory(req, res) {
//         try {
//             let category = await Category.findById(req.params.categoryId)
//             if (!category) {
//                 return res.status(403).send({
//                     error: 'Sorry, no category to delete in the slot.'
//                 })
//             }
//             await category.destroy()
//             res.send(category)
//         } catch (err) {
//             res.status(500).send({
//                 error: 'Sorry, an error occured when trying to delete a category.'
//             })
//         }
//     },
// }