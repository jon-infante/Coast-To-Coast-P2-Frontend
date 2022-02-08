import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { Wallpost } from '../../models/wallpost';
import { Router } from '@angular/router';


import { CategoryapiService } from '../../services/categoryapi.service';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private apiService: CategoryapiService, private router:Router) { }

  allCategories: Category[] = [];

  ngOnInit(): void {
    this.apiService.getAllCategories().then((categoryArray) => 
    {
      categoryArray.forEach((category: any) => {
        var castedCategory: Category = {
          ID: category.id,
          CategoryName: category.categoryName,
          WallPosts: [],
        }
        category.wallPosts.forEach((wallpost: any) => {
          var castedWallPost: Wallpost = {
            ID: wallpost.id,
            CategoryID: wallpost.categoryID,
            Keyword: wallpost.keyword,
            Drawings: wallpost.drawings
          }
          castedCategory.WallPosts.push(castedWallPost)
        })
        this.allCategories.push(castedCategory)
      })
      console.log(this.allCategories);
    })
  }

  goToCanvas(id: any): void
  {
    this.router.navigate([`canvas/${id}`],);
  }

  

}