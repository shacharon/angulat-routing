import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "./app/home/welcome.component";
import { PageNotFoundComponent } from "./app/page-not-found.component";
import { AuthGuard } from "./app/user/auth.guard";
import { PreloadAllModules } from "@angular/router";
import { PreloadStrategyService } from "./preload-strategy.service";

const ROUTES = [
      { path : 'welcome' , component : WelcomeComponent},
      { path : 'products' ,
        loadChildren : './app/products/product.module#ProductModule',
        data :{preload :true},
        canActivate : [AuthGuard],
      },
      { path : '' , redirectTo : 'welcome', pathMatch : 'full'},
      { path : '**' , component : PageNotFoundComponent},
     
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES, { preloadingStrategy :PreloadStrategyService}),
    CommonModule ,
   
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
