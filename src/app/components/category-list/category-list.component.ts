import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryapiService } from '../../services/categoryapi.service';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private apiService: CategoryapiService) { }

  allCategories: Category[] = [];

  ngOnInit(): void {
    this.apiService.getAllCategories().then((categoryArray) => 
    {
      categoryArray.forEach((category: any) => {
        var castedCategory: Category = {
          ID: category.id,
          CategoryName: category.categoryName,
          WallPosts: category.wallPosts,
        }
        this.allCategories.push(castedCategory)
      })
      console.log(this.allCategories);
    })
  }
}