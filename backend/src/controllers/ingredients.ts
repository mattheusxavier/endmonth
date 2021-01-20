import { Request, Response } from 'express'
import { Ingredients } from "../models/ingredients"

const router : Ingredients[] = []

let proxId = 1

function postIngredints(req: Request, res: Response) {
    const ingredients = req.body as Ingredients
    ingredients.id = proxId++
    router.push(ingredients)
    

    res.status(201).json(ingredients)
}

// function getIngredints(req: Request, res: Response) {
// }

// function getAllIngredints(req: Request, res: Response) {
// }

export default { 
    postIngredints,
    // getIngredints,
    // getAllIngredints

}