const {Catagory} = require('../models/category')
const {Product} = require('../models/product')
const {Cart} = require('../models/cart')


module.exports = {
  
    getAllProducts: async (req, res) => {
        try {
            console.log('get all products')
            const product = await Product.findAll()
            res.status(200).send(product)
        } catch (error) {
            console.log('Error In getAllProducts')
            console.log(error)
            res.sendStatus(400)
    }},
    
    getAllCatagorys: async (req, res) => {
        try {
            const catagory = await Catagory.findAll({
                include: [{
                    model: catagory,
                    required: true,
                    attributes: [`Catagory`]
                }]
            })
            res.status(200).send(catagory)
        } catch (error) {
            console.log('ERROR IN getAllCatagorys')
            console.log(error)
            res.sendStatus(400)
    }},

    addToCart: async (req, res) => {
        try {
            const { userId, productId } = req.body
            await Cart.create({ userId, productId })
            res.sendStatus(200)
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    },

    getCart : async (req, res) => {
        try { 
            const {userId} = req.params
            const cart = await Cart.findAll({
                where: { userId },
                include: [{
                    model: Product,
                    require: true,
            }]
            })
            res.status(200).send(cart)
        } catch (error) {
            console.log('Error in getCart')
            console.log(error)
        }
    },

    removeFromCart: async (req, res) => {
        try {
            const {id} = req.params
            await Cart.destroy({where: {id: +id}})
            res.sendStatus(200)
        } catch (error) {
            console.log('Error In removing from cart')
            console.log(error)
            res.sendStatus(400)
        }
    }

    
}
