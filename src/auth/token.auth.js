const { ALGORITHM } = require('../config/auth')
const JWT = require('jsonwebtoken')

const generate = payload =>
  new Promise(resolve => {
    JWT.sign(
      payload,
      process.env.SECRET_KEY,
      { algorithm: ALGORITHM },
      (err, token) => {
        if (err) {
          throw new Error()
        }
        resolve(token)
      }
    )
  })

module.exports = { generate }
