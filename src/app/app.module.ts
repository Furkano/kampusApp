import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import { LandPageComponent } from './land-page/land-page.component';
import { NormalPostComponent } from './posts/normal-post/normal-post.component';
import { UserComponent } from './posts/normal-post/user/user.component';
import { ContentComponent } from './posts/normal-post/content/content.component';
import { InteractionComponent } from './posts/normal-post/interaction/interaction.component';
import { HomeComponent } from './home/home.component';
import { CommentComponent } from './posts/comment/comment.component';
import { SingleCommentComponent } from './posts/comment/single-comment/single-comment.component';
import { CommentFormComponent } from './posts/comment/comment-form/comment-form.component';
import { PostNoThumbnailComponent } from './posts/post-no-thumbnail/post-no-thumbnail.component';
import { PostWithSliderComponent } from './posts/post-with-slider/post-with-slider.component';
import { PostWithThumbnailComponent } from './posts/post-with-thumbnail/post-with-thumbnail.component';
import { PostWithSliderInteractionComponent } from './posts/post-with-slider/post-with-slider-interaction/post-with-slider-interaction.component';
import { MiniNoThumbnailComponent } from './posts/mini-no-thumbnail/mini-no-thumbnail.component';
import { CoresModule } from 'src/cores/cores.module';
import {NgbModule, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './category/category.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AboutComponent } from './user/about/about.component';
import { SettingsComponent } from './user/settings/settings.component';
import { FavoritesComponent } from './user/favorites/favorites.component';
import { TimelineComponent } from './user/timeline/timeline.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    LoginComponent,
    RegisterComponent,
    LandPageComponent,
    NormalPostComponent,
    UserComponent,
    ContentComponent,
    InteractionComponent,
    HomeComponent,
    CommentComponent,
    SingleCommentComponent,
    CommentFormComponent,
    PostNoThumbnailComponent,
    PostWithSliderComponent,
    PostWithThumbnailComponent,
    PostWithSliderInteractionComponent,
    MiniNoThumbnailComponent,
    CategoryComponent,
    PostListComponent,
    UserProfileComponent,
    AboutComponent,
    SettingsComponent,
    FavoritesComponent,
    TimelineComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoresModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
