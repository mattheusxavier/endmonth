import { Router } from 'express'
import ingredients from '../controllers/ingredients'
import recipeController from '../controllers/recipes'

const routerRecipe = Router()

routerRecipe.post('/recipes/register', recipeController.postRecipe)

routerRecipe.post('/ingredient/register', ingredients.postIngredints)

routerRecipe.get('/recipes/:id', recipeController.getRecipe)

routerRecipe.get('/allrecipes', recipeController.getAllRecipes)

export default routerRecipe