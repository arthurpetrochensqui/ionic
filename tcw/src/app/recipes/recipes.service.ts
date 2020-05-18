import { Injectable } from '@angular/core';
import { Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe [] = [
    {
    id: 'r1',
    title: 'Schnitzel',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hungarian_schnitzel_with_nokedli.png/800px-Hungarian_schnitzel_with_nokedli.png',
    ingredients: ['French Fries', 'Pork Meat', 'Salad Tomate']
    },
    {
    id: 'r2',
    title: 'Spachetti',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flying_Spaghetti_Monster.svg/800px-Flying_Spaghetti_Monster.svg.png',
    ingredients: ['Spachetti', 'Meat', 'Tomates']
    }
];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
