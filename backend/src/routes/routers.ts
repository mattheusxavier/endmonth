import { Router } from 'express'
import recipeController from '../controllers/recipes'
import  ingredientController  from '../controllers/ingredients'

const routerRecipe = Router()

routerRecipe.post('/recipes/register', recipeController.postRecipe)

routerRecipe.post('/ingredient/register', ingredientController.postIngredint)

routerRecipe.get('/recipe/:id', recipeController.getRecipe)

routerRecipe.get('/ingredient/:id', ingredientController.getIngredient)

routerRecipe.get('/allrecipes', recipeController.getAllRecipes)

routerRecipe.get('/allingredients', ingredientController.getAllIngredients)

export default routerRecipe