import Sequelize from 'sequelize'
import { Recipe } from './recipe'
import database from '../database'

const RecipeModel = database.define('recipe', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categories: {
        type: Sequelize.STRING,
        allowNull: false
    },
    time: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    photos: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
    },



})