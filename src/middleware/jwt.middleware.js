const JWT = require('jsonwebtoken');
const createError = require('http-errors');
require('dotenv').config();

module.exports = {  
  generateAccessToken: (user) => {
    return new Promise((resolve, reject) => {
      const payload  = {}
      const secret = process.env.ACCESS_TOKEN_SECRET
      const options = { 
        expiresIn: '1d',
        audience: user }
      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          reject(createError.InternalServerError())
          return
        }
        resolve(token)
      })
    })
  },
  verifyAccessToken: (req, res, next) => {
    if (!req.headers['authorization']) return next(createError.Unauthorized())
    const authHeader = req.headers['authorization']
    const bearerToken = authHeader.split(' ')
    const token = bearerToken[1]
    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) {
        const message =
          err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message
        return next(createError.Unauthorized(message))
      }
      req.payload = payload
      next()
    })
  }
}