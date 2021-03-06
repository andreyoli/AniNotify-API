/* eslint-disable camelcase */
const { LOGIN_EXPIRATION_TIME } = require('../config/auth')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const Token = require('../auth/token.auth')

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
  },

  async auth(req, res, next) {
    try {
      const { email, password } = req.body

      const user = await User.findOne({
        where: { email }
      })

      if (!user) {
        return res.status(400).json({ error: 'Invalid email' })
      }

      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(400).json({ error: 'Invalid password' })
      }

      const JWTData = {
        iss: 'AniNotify-API',
        sub: user.id,
        exp: Math.floor(Date.now() / 1000) + LOGIN_EXPIRATION_TIME
      }

      const token = await Token.generate(JWTData)

      res.json({ token })
    } catch (err) {
      next(err)
    }
  }
}
