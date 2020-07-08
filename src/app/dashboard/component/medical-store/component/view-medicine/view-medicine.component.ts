import { DeleteMedicineComponent } from './../delete-medicine/delete-medicine.component';
import { EditMedicineComponent } from './../edit-medicine/edit-medicine.component';
import { MatDialog } from '@angular/material/dialog';
import { MedicalStoreService } from './../../../service/medical-store.service';
import { MedicineListElement } from './../../model/medicine-list-element';
import { Component, OnInit, Inject, Injectable, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.component.html',
  styleUrls: ['./view-medicine.component.css']
})

export class ViewMedicineComponent implements OnInit {

  displayedMedicineColumnsName: string[] = ['ID', 'MEDICINE_NAME', 'Price','Quantity', 'AVAIL_QUANTITY', 'SELL_QUANTITY','OPERATIONS'];
  dataSource:any;
  medicineListArray:any=[];
  index:number = 0;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private medicalStoreService: MedicalStoreService,private dialog: MatDialog) { 
  }

  ngOnInit(): void {
    this.getMedicineList();
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getMedicineList(){
    this.medicalStoreService.getMedicineList().subscribe(response=>{
      if(response){
        console.log(response);
        
        for (let prop in response) {
          console.log(response[prop]);
          let data = response[prop];
          this.index++;
          this.getMedicineListData(data);
      }
        
        this.dataSource = new MatTableDataSource(this.medicineListArray);
      }
    })
      
  }

  getMedicineListData(data){
     this.medicineListArray.push({
      "ID": this.index,
      "MEDICINE_NAME" : data['medicineName'],
      "Price": data['price'],
      "Quantity": data['quantity'],
      "AVAIL_QUANTITY": data['avail_med_quantity'],
      "SELL_QUANTITY": data['sell_med_qantity'],
    })
//    console.log("medicineListArray ->"+this.medicineListArray);
  }

  editMedicine(element){
    console.log("editMedicine -> element : "+element);
      const dialogRef = this.dialog.open(EditMedicineComponent, {
        width: '300px',
        height: '300px',
        data: {element}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if(result){
          alert('successful');
        }
      });
  }

  // editMedicine(element): void {
  //   const dialogRef = this.dialog.open(EditMedicineComponent, {
  //     width: '450px',
  //     height: '200px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     if(result){
  //       alert('successful');
  //     }
  //   });
  // }

}
