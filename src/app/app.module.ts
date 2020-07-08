import { AddMedicineComponent } from './dashboard/component/medical-store/component/add-medicine/add-medicine.component';
import { DeleteMedicineComponent } from './dashboard/component/medical-store/component/delete-medicine/delete-medicine.component';
import { SearchMedicineComponent } from './dashboard/component/medical-store/component/search-medicine/search-medicine.component';
import { ViewMedicineComponent } from './dashboard/component/medical-store/component/view-medicine/view-medicine.component';
import { AlertComponent } from './shared/component/alert/alert.component';
import { DialogBoxComponent } from './shared/component/dialog-box/dialog-box.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicalStoreComponent } from './dashboard/component/medical-store/medical-store.component';

import { HeaderComponent } from './core/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EditMedicineComponent } from './dashboard/component/medical-store/component/edit-medicine/edit-medicine.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicalStoreComponent,
    AddMedicineComponent,
    HeaderComponent,
    DashboardComponent,
    AlertComponent,
    ViewMedicineComponent,
    SearchMedicineComponent,
    DialogBoxComponent,
    DeleteMedicineComponent,
    EditMedicineComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
    
  ],
  entryComponents: [
    EditMedicineComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
