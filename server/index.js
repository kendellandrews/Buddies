require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {SERVER_PORT} = process.env


const {getAllProducts, addToCart} = require('./controllers/get') /// should i have another controller file?
const {login, register} = require('./controllers/auth.js')
const {isAuthorized} = require('./middleware/isAuthorized')
const {sequelize} = require('./util/database')
const {Cart} = require('./models/cart')
const {Product} = require('./models/product')
const {User} = require('./models/user')
const {seed} = require('./util/seed')
const {getCart} = require('./controllers/get')
const {removeFromCart} = require('./controllers/get')

const app = express()
app.use(express.json())
app.use(cors())

app.post('/seed', seed)


Cart.belongsTo(Product) // linking main tables to bridge table
Product.hasMany(Cart) // linking main bridge tabel to main tables ??


User.hasMany(Cart)
Cart.belongsTo(User)

app.post('/register', register)
app.post('/login', login)

app.get('/product', getAllProducts)
app.post('/cart', addToCart)
app.get('/cart/:userId', getCart)
app.delete('/cart/:id', removeFromCart)


sequelize.sync() //{force: true}

.then(() => {
    app.listen(SERVER_PORT, () => console.log(`db sync successful and server is running on port ${SERVER_PORT}`));
})
.catch(err => console.log(err))