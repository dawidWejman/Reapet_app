import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  RecipeLoad: Recipe; 

  constructor(private activatedRoute: ActivatedRoute,
              private recipesService: RecipesService,
              private router: Router  
              ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('recipeId')){
        //repeating
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.RecipeLoad = this.recipesService.gettingRecipe(recipeId);
    });
  }

  ondeleteRecipe(){
    this.recipesService.deleteRecipe(this.RecipeLoad.id);
    this.router.navigate(['/recipes']);
  }
}
