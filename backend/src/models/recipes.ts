import { Ingredients } from './ingredients'

export type Recipe = {
    id?: number,
    title: string,
    categories: string,
    time: number,
    photos: number,
    ingredients: Ingredients[],
    servings: number,
    diretion: string
}