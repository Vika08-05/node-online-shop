const Sequalize = require("sequelize");



const sequalize = require("../utils/database")

//назва таблиці 
const Product = sequalize.define("product", {
    id: {
        type: Sequalize.INTEGER, //тип данних інта - ціле число
        autoIncrement: true, // наш айдішнік буде збільшуватись на 1 після кожного нового айді
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequalize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequalize.DOUBLE,
        allowNull: false,
    },
    image: {
        type: Sequalize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequalize.STRING,
        allowNull: false,
    },
})




module.exports = Product;