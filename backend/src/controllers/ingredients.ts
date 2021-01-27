import { Request, Response } from 'express'
import { Ingredient } from "../models/ingredient"

export interface IngredientFild {
    id?: number
}

const ingredients : Ingredient[] = []

let proxId = 1

function postIngredint(req: Request, res: Response) {
    const ingredient = req.body as Ingredient
    ingredient.id = proxId++
    ingredients.push(ingredient)

    res.status(201).json(ingredient)
}

function getAllIngredients(req: Request, res: Response) {
    const allIngredients = ingredients.sort()
    res.json(allIngredients)
}

function getIngredient(req: Request, res: Response) {
    const id = Number(req.params.id)
    const ingredient = ingredients.find( (item: IngredientFild) => item.id === id)
    if(!id)
        res.sendStatus(404)
    else
        res.json(ingredient)
}

export default { 
    postIngredint,
    getAllIngredients,
    getIngredient
}