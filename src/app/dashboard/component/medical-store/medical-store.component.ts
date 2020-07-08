import { DeleteMedicineComponent } from './component/delete-medicine/delete-medicine.component';
import { DialogBoxComponent } from './../../../shared/component/dialog-box/dialog-box.component';
import { ViewMedicineComponent } from './component/view-medicine/view-medicine.component';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { AddMedicineComponent } from './component/add-medicine/add-medicine.component';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { setMaxListeners } from 'process';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-medical-store',
  templateUrl: './medical-store.component.html',
  styleUrls: ['./medical-store.component.css']
})
export class MedicalStoreComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('inside -> Medical Store');
  }

  openDeleteDialogBox(): void {
    const dialogRef = this.dialog.open(DeleteMedicineComponent, {
      width: '450px',
      height: '200px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        alert('successful');
      }
    });
  }
} 
