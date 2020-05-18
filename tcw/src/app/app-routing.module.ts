import { NgModule, ModuleWithProviders } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SchedulePage } from './schedule/schedule.page';
import { RecipesPage } from './recipes/recipes.page';



/*
//configurando rotas basicas
const APP_ROUTES: Routes = [
  //{path: 'schedule', component: SchedulePage},
  //{path: 'recipes', component: RecipesPage},
  //{path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'schedule', pathMatch: 'full'}
];
*/
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'recipes',
    children: [
    {
      path: '',
      loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
    },
    {
      path: ':recipeId',
      loadChildren: () => import('./recipes/recipe-detail/recipe-detail.module').then(r => r.RecipeDetailPageModule)
    }

  ]
},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

