const listCategoriesCtrl = {}
const ListCategories = require('../models/listCategories')

//controller list
listCategoriesCtrl.getListCategories = async (req, res) => {
    const listCategories = await ListCategories.find({userId: req.userId})
    res.json(listCategories)
}

//controller create
listCategoriesCtrl.createListCategories = async (req, res) => {
    const newListCategories = new ListCategories(req.body)
    await newListCategories.save();
    res.send({message: 'Categories created'})
}

//controller select id
listCategoriesCtrl.getListCategorie = async (req, res) => {
    const listCategories = await ListCategories.findById(req.params.id)
    res.json(listCategories)
}

//controller update
listCategoriesCtrl.addEditListCategories = async (req, res) => {
    await ListCategories.findByIdAndUpdate(req.params.id, req.body)
    res.json({message: 'Category update'})
}

//controller update list
listCategoriesCtrl.updateListCategories = async (req, res) => {
    await ListCategories.deleteMany()
    await ListCategories.insertMany(req.body)
    res.json({message: 'List Categories update'})
}

//controller delete
listCategoriesCtrl.deleteListCategories = async (req, res) => {
    await ListCategories.findByIdAndDelete(req.params.id)
    res.send({message: 'Categories delete'})
}

module.exports = listCategoriesCtrl;