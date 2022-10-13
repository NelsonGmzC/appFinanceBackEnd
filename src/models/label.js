const { Schema, model } = require("mongoose")

const labelSchema = new Schema({
  labels: {type: Array, required: false},
  userId: {type: String, required: true}
}, {
  timestamps: true,
  versionKey: false
})

module.exports = model('Label', labelSchema)