const { DataTypes } = require('sequelize')
const { sequelize } = require('../util/database')

module.exports = {
    Cart: sequelize.define('cart', {
        id: { ///can this be cartId or doesn it have to be Id
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
})
}  