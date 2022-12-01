const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database') /// is it 'sequelize or ../util/database'?

module.exports = {
    Product: sequelize.define('product', {
       id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    }),
}