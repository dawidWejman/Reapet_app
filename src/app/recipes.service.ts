import { Injectable } from '@angular/core';

import { Recipe } from './recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  

  private recipes: Recipe[] = [
    {
        id: 'r1',
        title:'schnitzel',
        imageUrl:'https://assets.bonappetit.com/photos/57ae1afd53e63daf11a4e26f/1:1/w_1920,c_limit/chicken-schnitzel.jpg',
        ingredients: ['French fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title:'chicken fries',
      imageUrl:'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/FB756ECF-34CD-42A6-8D91-47C6944EB93F/Derivates/6524a319-89db-46e5-9774-98e10794b47a.jpg',
      ingredients: [' panko (Japanese-style breadcrumbs)','large eggs, lightly beaten', 'water', 'ound chicken cutlets, thinly sliced into 1/3-in. wide strips']
    
    }
  ];

  constructor() { }
  getAllrecipes(){
    return [...this.recipes];
  }
  gettingRecipe(recipeId: string){
    return {...this.recipes.find(recipe => {
      return recipe.id=== recipeId;
    })};
  }
  deleteRecipe(recipeid: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeid;
    });
  }
}
