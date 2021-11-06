import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorCrudComponent } from 'src/app/views/donor-crud/donor-crud.component';
import { HomeComponent } from 'src/app/views/home/home.component';
import { DonorCreateComponent } from '../donor/donor-create/donor-create.component';
import { DonorDeleteComponent } from '../donor/donor-delete/donor-delete.component';
import { DonorUpdateComponent } from '../donor/donor-update/donor-update.component';
import { AdminComponent } from './admin.component';



const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'donor',
        component: DonorCrudComponent,
      },
      {
        path: 'donor/create',
        component: DonorCreateComponent,
      },
      {
        path: 'donor/update/:id',
        component: DonorUpdateComponent,
      },
      {
        path: 'donor/delete/:id',
        component: DonorDeleteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
