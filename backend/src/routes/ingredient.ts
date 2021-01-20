import { Router } from 'express'
import ingredientController from '../controllers/ingredients'

const routerIngredient = Router()

routerIngredient.post('/ingredient/register', ingredientController.postIngredints)

// routerIngredient.get('/ingredient/:id', ingredientController.getIngredints)

// routerIngredient.get('/ingredient', ingredientController.getAllIngredints)

export default routerIngredient