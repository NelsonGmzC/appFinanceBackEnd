const { Router } = require('express')
const req = require('express/lib/request')
const jwt = require('jsonwebtoken')
const router = Router()

const transactionCtrl = require('../controllers/transaction.controller.js')
const listCategoriesCtrl = require('../controllers/listCategories.controller')
const labelCtrl = require('../controllers/label.controller')
const userCtrl = require('../controllers/user.controller')

router.post('/signup', userCtrl.signupUser)
router.post('/signin', userCtrl.signinUser)

router.get('/:id', verifyToken, transactionCtrl.getTransactions)
router.post('/', verifyToken, transactionCtrl.createTransaction)
router.get('/:id', verifyToken, transactionCtrl.getTransaction)
router.put('/:id', verifyToken, transactionCtrl.addEditTransaction)
router.delete('/:id', verifyToken, transactionCtrl.deleteTransaction)

router.get('/settings/categories/:id', verifyToken, listCategoriesCtrl.getListCategories)
router.post('/settings/categories', verifyToken, listCategoriesCtrl.createListCategories)
router.get('/settings/categories/:id', verifyToken, listCategoriesCtrl.getListCategorie)
router.put('/settings/categories/:id', verifyToken, listCategoriesCtrl.addEditListCategories)
router.put('/settings/categories', verifyToken, listCategoriesCtrl.updateListCategories)
router.delete('/settings/categories/:id', verifyToken, listCategoriesCtrl.deleteListCategories)

router.get('/settings/labels/:id', verifyToken, labelCtrl.getLabels)
router.post('/settings/labels', verifyToken, labelCtrl.createLabel)
router.get('/settings/labels/:id', verifyToken, labelCtrl.getLabel)
router.put('/settings/labels/:id', verifyToken, labelCtrl.updateLabel)
router.delete('/settings/labels/:id', verifyToken, labelCtrl.deleteLabel)

module.exports = router

//function verify token user
function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized Request');
  }

  const token = req.headers.authorization.split(' ')[1]
  if (token === 'null') {
    return res.status(401).send('Unauthorized Request');
  }

  const payload = jwt.verify(token, 'secretKey')
  req.userId = payload._id;
  next();
}