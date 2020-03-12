import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteCategoryService } from './services/favorite-category.service';
import { CategoryService } from './services/category.service';
import { CommentService } from './services/comment.service';
import { FavoriteCompanyService } from './services/favorite-company.service';
import { FavoritePostService } from './services/favorite-post.service';
import { PostLikeService } from './services/post-like.service';
import { PostViewService } from './services/post-view.service';
import { PostService } from './services/post.service';
import { SearchService } from './services/search.service';
import { SubCategoryService } from './services/subcategory.service';
import { UserService } from './services/user.service';
import { UserCategoryService } from './services/usercategory.service';



@NgModule({
  declarations: [
    
  ],
  providers:[
    CategoryService,
    CommentService, 
    FavoriteCategoryService,
    FavoriteCompanyService,
    FavoritePostService,
    PostLikeService,
    PostViewService,
    PostService,
    SearchService,
    SubCategoryService,
    UserService,
    UserCategoryService
  ],
  imports: [
    CommonModule,
  ]
})
export class CoresModule { }
