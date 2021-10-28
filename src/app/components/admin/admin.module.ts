import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  MatSidenavContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from 'src/app/views/splash-screen/home/home.component';
import { FooterComponent } from './template/footer/footer.component';

// import { EditorModule } from '@tinymce/tinymce-angular';
// import { NgxMatFileInputModule } from '@angular-material-components/file-input';

@NgModule({
  declarations: [
    AdminComponent,
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
