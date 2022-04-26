const User = require('../models/user');

exports.postRegister = async (req, res, next) => {
  const contactNo = req.body.contact;

  const user = await User.create({
    contact: contactNo,
    cart: { items: [] }
  })

  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: user
  })
}

exports.postLogin = async (req, res, next) => {
  const { contact } = req.body

  if (!contact) {
    return res.status(404).json({
      success: false,
      message: 'Please provide your contact no.'
    })
  }

  // Check for user
  const user = await User.findOne({ contact: contact });

  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Invalid Credentials'
    })
  }

  return res.status(200).json({
    success: true,
    message: 'user logged in succesfully',
    data: user
  })
}