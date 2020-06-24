import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalStoreComponent } from './dashboard/component/medical-store/medical-store.component';
import { AddMedicineComponent } from './dashboard/component/medical-store/component/add-medicine/add-medicine/add-medicine.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent,
   children:[
            {path: 'medical-store', component: MedicalStoreComponent,
            children:[
                      {path: 'add-medicine', component: AddMedicineComponent}
            ]
            },
    ]},
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
