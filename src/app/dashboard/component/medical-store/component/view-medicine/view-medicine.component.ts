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

  displayedMedicineColumnsName: string[] = ['ID', 'MEDICINE_NAME', 'Price','Quantity', 'AVAIL_QUANTITY', 'SELL_QUANTITY'];
  dataSource:any;
  medicineListArray:any=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private medicalStoreService: MedicalStoreService) { 
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
          this.getMedicineListData(data);
      }
        
        this.dataSource = new MatTableDataSource(this.medicineListArray);
      }
    })
      
  }

  getMedicineListData(data){
     this.medicineListArray.push({
      "ID": data['id'],
      "MEDICINE_NAME" : data['medicineName'],
      "Price": data['price'],
      "Quantity": data['quantity'],
      "AVAIL_QUANTITY": data['avail_med_quantity'],
      "SELL_QUANTITY": data['sell_med_qantity']
    })
//    console.log("medicineListArray ->"+this.medicineListArray);
  }

}
