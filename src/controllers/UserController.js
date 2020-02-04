/* eslint-disable camelcase */
const User = require('../models/User')

module.exports = {
  async store(req, res, next) {
    try {
      const { name, password, email, filters } = req.body
      const role_name = 'user'
      const date_birth = Date.now()
      const user = await User.create({
        name,
        password,
        email,
        filters,
        role_name,
        date_birth
      })

      user.password = undefined
      return res.send(`User ${user.name} has been registered`)
    } catch (err) {
      next(err)
    }
  }
}
