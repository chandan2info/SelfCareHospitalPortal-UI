import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { AddMedicineComponent } from './component/add-medicine/add-medicine/add-medicine.component';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { setMaxListeners } from 'process';

@Component({
  selector: 'app-medical-store',
  templateUrl: './medical-store.component.html',
  styleUrls: ['./medical-store.component.css']
})
export class MedicalStoreComponent implements OnInit {

  constructor(private _router: Router,private modelService: NgbModal) { }

  ngOnInit(): void {
  }

  addMedicine(){
    console.log("addmedicine");
    const modelRef = this.modelService.open(AddMedicineComponent,{
      centered: false,
      backdrop: 'static',
      keyboard: false,
      size: 'sm',
      
    });
    modelRef.result.then((response)=>{
      if(response){
        console.log("Add medicine response");
      }
    },error=>{
      console.log('ERROR : add medicine ',error);
    })
  }
} 
