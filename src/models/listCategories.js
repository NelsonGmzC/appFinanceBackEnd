const { Schema, model } = require("mongoose")

const listCategoriesSchema = new Schema({
  category: {type: String, required: true},
  icon: {type: String, require: true},
  color: {type: String, require: true},
  name: {type: String, require: true},
  userId: {type: String, required: true}
}, {
  timestamps: true,
  versionKey: false
})

module.exports = model('listCategories', listCategoriesSchema)