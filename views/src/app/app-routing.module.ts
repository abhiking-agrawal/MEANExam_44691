import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path : 'addCar', component: AddCarComponent},
  {path : 'detailCar/:id', component :DetailComponent},
  {path : '', redirectTo:"/addCar", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
