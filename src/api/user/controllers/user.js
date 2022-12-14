const User = require('../models/user')

const get = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
}

const create = async (req, res) => {
  try {
    const user = new User(req.body);
    const newUser = await user.save()
    res.status(200).json(newUser)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
}

const getAll = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
}

const update = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findByIdAndUpdate(_id, req.body)
    const updatedUser = Object.assign(user, req.body)
    
    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
}

const remove = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findByIdAndDelete(_id)
    res.status(200).json(user)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
}

module.exports = {
  get,
  create,
  getAll,
  update,
  remove
}