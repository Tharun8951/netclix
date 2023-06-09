const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../models/users.models')

const createuser = async (req, res) => {
  try {
    const { password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = {
      ...req.body,
      password: hashedPassword,
    }
    await userModel.create(newUser)
    const token = jwt.sign({ data: newUser._id }, process.env.SECRET_KEY)
    res.json({
      msg: 'success',
      authToken: token,
    })
  } catch (err) {
    console.log(err)
  }
}

const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userdata = await userModel.findOne({ email });
    
    if (userdata) {
      const passwordMatch = await bcrypt.compare(password, userdata.password);
      
      if (passwordMatch) {
        const token = jwt.sign({ data: userdata._id }, process.env.SECRET_KEY);
        res.json({
          truemsg: 'success',
          authToken: token,
        });
      } else {
        res.json({
          msg: 'wrong password',
        });
      }
    } else {
      res.json({
        msg: 'can\'t find email',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: 'Internal Server Error',
    });
  }
};

module.exports = { createuser, loginuser }
