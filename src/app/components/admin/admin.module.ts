

// import { EditorModule } from '@tinymce/tinymce-angular';
// import { NgxMatFileInputModule } from '@angular-material-components/file-input';

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSidenavModule, MatSidenavContainer } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { DonorCrudComponent } from "src/app/views/donor-crud/donor-crud.component";
import { HomeComponent } from "src/app/views/home/home.component";
import { DonorCreateComponent } from "../donor/donor-create/donor-create.component";
import { DonorDeleteComponent } from "../donor/donor-delete/donor-delete.component";
import { DonorReadComponent } from "../donor/donor-read/donor-read.component";
import { DonorUpdateComponent } from "../donor/donor-update/donor-update.component";
import { FooterComponent } from "../template/footer/footer.component";
import { HeaderComponent } from "../template/header/header.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";

@NgModule({
  declarations: [
    AdminComponent,
    DonorCreateComponent,
    DonorCrudComponent,
    DonorUpdateComponent,
    DonorDeleteComponent,
    DonorReadComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    ReactiveFormsModule,
    // EditorModule,
    // NgxMatFileInputModule
  ],
  providers: [MatSidenavContainer],
})
export class AdminModule { }
