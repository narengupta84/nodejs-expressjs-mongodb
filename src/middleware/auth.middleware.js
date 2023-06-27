const express = require('express')
const router = express.Router()
const { generateAccessToken } = require('./jwt.middleware')

router.get('/token', async (req, res) => {
  try {
    const accessToken = await generateAccessToken(req.body.user)
    res.json(accessToken)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router