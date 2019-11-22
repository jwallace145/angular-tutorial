import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    @Output() recipeSelectedEvent = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('test recipe', 'test description', 'https://usatcfn.files.wordpress.com/2019/06/usatsi_12525046-2.jpg?w=1000&h=600&crop=1'),
        new Recipe('another one', 'watch yo mouf', 'https://usatcfn.files.wordpress.com/2019/06/usatsi_12525046-2.jpg?w=1000&h=600&crop=1')
    ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
      this.recipeSelectedEvent.emit(recipe);
  }

}
