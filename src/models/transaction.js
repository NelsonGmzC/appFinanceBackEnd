const { Schema, model } = require("mongoose")

const transactionSchema = new Schema({
  category: {type: String, required: true},
  categoryOpc: {type: String, required: true},
  date: {type: Date, required: true},
  notes: {type: String, required: false},
  labels: {type: Array, required: false},
  amoint: {type: Number, required: true},
  coin: {type: String, required: true},
  img: {type: String, required: false},
  userId: {type: String, required: true}
}, {
  timestamps: true,
  versionKey: false
})

module.exports = model('Transaction', transactionSchema)