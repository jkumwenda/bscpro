import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const LayoutRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(LayoutRoutes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
