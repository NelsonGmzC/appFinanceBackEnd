const labelCtrl = {}
const Label = require('../models/label')

//controller list
labelCtrl.getLabels = async (req, res) => {
    const label = await Label.find({userId: req.userId})
    res.json(label)
}

//controller create
labelCtrl.createLabel = async (req, res) => {
    const newLabel = new Label(req.body)
    await newLabel.save();
    res.send({message: 'Label created'})
}

//controller select id
labelCtrl.getLabel = async (req, res) => {
    const label = await Label.findById(req.params.id)
    res.json(label)
}

//controller update
labelCtrl.updateLabel = async (req, res) => {
    await Label.findByIdAndUpdate(req.params.id, req.body)
    res.json({message: 'Label update'})
}

//controller delete
labelCtrl.deleteLabel = async (req, res) => {
    await Label.findByIdAndDelete(req.params.id)
    res.send({message: 'Label delete'})
}

module.exports = labelCtrl;