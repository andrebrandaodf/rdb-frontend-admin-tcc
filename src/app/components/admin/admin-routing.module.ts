import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorCrudComponent } from 'src/app/views/donor-crud/donor-crud.component';
import { EventCrudComponent } from 'src/app/views/event-crud/event-crud.component';
import { HomeComponent } from 'src/app/views/home/home.component';
import { ItemCrudComponent } from 'src/app/views/item-crud/item-crud.component';
import { DonorCreateComponent } from '../donor/donor-create/donor-create.component';
import { DonorDeleteComponent } from '../donor/donor-delete/donor-delete.component';
import { DonorUpdateComponent } from '../donor/donor-update/donor-update.component';
import { EventCreateComponent } from '../event/event-create/event-create.component';
import { EventDeleteComponent } from '../event/event-delete/event-delete.component';
import { EventUpdateComponent } from '../event/event-update/event-update.component';
import { ItemCreateComponent } from '../item/item-create/item-create.component';
import { ItemDeleteComponent } from '../item/item-delete/item-delete.component';
import { ItemUpdateComponent } from '../item/item-update/item-update.component';
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

      // Rotas Event
      {
        path: 'event',
        component: EventCrudComponent,
      },
      {
        path: 'event/create',
        component: EventCreateComponent,
      },
      {
        path: 'event/update/:id',
        component: EventUpdateComponent,
      },
      {
        path: 'event/delete/:id',
        component: EventDeleteComponent,
      },

      //Rotas Item
      {
        path: 'item',
        component: ItemCrudComponent,
      },
      {
        path: 'item/create',
        component: ItemCreateComponent,
      },
      {
        path: 'item/update/:id',
        component: ItemUpdateComponent,
      },
      {
        path: 'item/delete/:id',
        component: ItemDeleteComponent,
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
