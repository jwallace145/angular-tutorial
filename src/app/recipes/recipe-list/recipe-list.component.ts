import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('test recipe', 'test description', 'https://usatcfn.files.wordpress.com/2019/06/usatsi_12525046-2.jpg?w=1000&h=600&crop=1')
    ];

  constructor() { }

  ngOnInit() {
  }

}
