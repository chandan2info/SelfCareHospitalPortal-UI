import { SearchMedicineComponent } from './dashboard/component/medical-store/component/search-medicine/search-medicine.component';
import { ViewMedicineComponent } from './dashboard/component/medical-store/component/view-medicine/view-medicine.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalStoreComponent } from './dashboard/component/medical-store/medical-store.component';
import { AddMedicineComponent } from './dashboard/component/medical-store/component/add-medicine/add-medicine.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent,
   children:[
            {path: 'medical-store', component: MedicalStoreComponent,
            children:[
                      {path: 'medicine', component: AddMedicineComponent},
                      {path: 'view-medicine', component: ViewMedicineComponent},
                      {path: 'search-medicine', component: SearchMedicineComponent}
                      
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
