import { Request, Response } from 'express'
import { Recipe } from '../models/recipe'

export interface RecipeFind {
    id?: number
}

const recipes : Recipe[] = []

let proxId = 1

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
    const id = Number(req.params.id)
    const recipe = recipes.find( (item: RecipeFind) => item.id === id)
    if(!id)
        res.sendStatus(404)
    else
        res.json(recipe)
}

export default { 
    postRecipe,
    getRecipe,
    getAllRecipes
}