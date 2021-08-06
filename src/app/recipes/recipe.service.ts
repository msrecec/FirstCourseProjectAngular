import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png'
    ),
  ];

  /**
   * Gets a new array which is a copy of the current array
   *
   * @returns
   */

  getRecipes() {
    return this.recipes.slice();
  }
}
