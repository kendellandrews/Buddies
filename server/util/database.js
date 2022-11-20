require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,  /// adjust this false for when the site is live so others can get in
        }
    } 
})

module.exports = {
    sequelize
}

/// this entire page is a boilerplate, it will almost alaways be the same