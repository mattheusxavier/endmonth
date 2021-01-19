import { Router } from 'express'
import linksController from '../controllers/recipes'

const router = Router()

router.post('/recipes/register', linksController.postRecipe)

router.get('/recipes/:id', linksController.getRecipe)

router.get('/allrecipes', linksController.getAllRecipes)

export default router