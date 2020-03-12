import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AboutComponent } from './user/about/about.component';
import { TimelineComponent } from './user/timeline/timeline.component';
import { FavoritesComponent } from './user/favorites/favorites.component';
import { SettingsComponent } from './user/settings/settings.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'landing', component: LandPageComponent},
  { path: 'home', component: HomeComponent},
  { path: 'category/:id', component: CategoryComponent},
  { path: 'search', component: SearchComponent},
  { path: 'userProfile', component: UserProfileComponent,children:[
    { path:"",component:TimelineComponent,outlet:'user'},
    { path:"timeLine",component:TimelineComponent,outlet:'user'},
    { path:"about",component:AboutComponent,outlet:'user'},
    { path:"favorites",component:FavoritesComponent,outlet:'user'},
    { path:"settings",component:SettingsComponent,outlet:'user'},
  ]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
