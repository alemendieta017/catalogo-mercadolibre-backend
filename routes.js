const express = require('express')
const router = express.Router()
const controller = require('./controllers/productsController')

router.get('/items', async function (req, res) {
  try {
    let productsQuery = req.query.q || ''
    const products = await controller.getProducts(productsQuery)
    res.send(products)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

router.get('/items/:id', async function (req, res) {
  try {
    let productId = req.params.id
    const productInformation = await controller.getProductInformation(productId)
    res.send(productInformation)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

module.exports = router
