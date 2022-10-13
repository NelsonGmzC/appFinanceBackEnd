const transactionCtrl = {}
const Transaction = require('../models/Transaction')

//controller list
transactionCtrl.getTransactions = async (req, res) => {
    const transactions = await Transaction.find({userId: req.userId})
    res.json(transactions)
}

//controller create
transactionCtrl.createTransaction = async (req, res) => {
    const newTransaction = new Transaction(req.body)
    await newTransaction.save();
    res.send({message: 'Transaction created'})
}

//controller select id
transactionCtrl.getTransaction = async (req, res) => {
    const transaction = await Transaction.findById(req.params.id)
    res.json(transaction)
}

//controller update
transactionCtrl.addEditTransaction = async (req, res) => {
    await Transaction.findByIdAndUpdate(req.params.id, req.body)
    res.json({message: 'Transaction update'})
}

//controller delete
transactionCtrl.deleteTransaction = async (req, res) => {
    await Transaction.findByIdAndDelete(req.params.id)
    res.send({message: 'Transaction delete'})
}

module.exports = transactionCtrl;