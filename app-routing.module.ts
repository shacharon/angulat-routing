import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "./app/home/welcome.component";
import { PageNotFoundComponent } from "./app/page-not-found.component";
const ROUTES = [
      { path : 'welcome' , component : WelcomeComponent},
      { path : '' , redirectTo : 'welcome', pathMatch : 'full'},
      { path : '**' , component : PageNotFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES),
    CommonModule
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
