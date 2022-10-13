const userCtrl = {}
const User = require('../models/user')
const jwt = require('jsonwebtoken')

//controller signup
userCtrl.signupUser = async (req, res) => {
  const newUser = new User(req.body)
  await newUser.save()

  const token = jwt.sign({ _id: newUser._id }, 'secretKey')
  res.status(200).json({token})
}

//controller signin
userCtrl.signinUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email })

  if (!user) return res.status(401).send("The email doesn't exists");
  if (user.password !== password) return res.status(401).send("Wrong password");

  const token = jwt.sign({ _id: user._id }, 'secretKey')
  res.status(200).json({token})
}


module.exports = userCtrl;