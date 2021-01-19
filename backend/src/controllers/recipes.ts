import { Request, Response } from 'express'
import { Recipe } from '../models/recipes'

const recipes : Recipe[] = []

let proxId = 0

function postRecipe(req: Request, res: Response) {
    const recipe = req.body as Recipe
    recipe.id = proxId++
    recipes.push(recipe)
    res.status(201).json(recipe)
}

function getAllRecipes(req: Request, res: Response) {
    const allrecipes = recipes.sort()
    res.json(allrecipes)
}

function getRecipe(req: Request, res: Response) {
}

export default { 
    postRecipe,
    getRecipe,
    getAllRecipes
}