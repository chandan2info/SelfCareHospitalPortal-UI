
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MedicalStoreService } from '../../../service/medical-store.service';

@Component({
  selector: 'app-search-medicine',
  templateUrl: './search-medicine.component.html',
  styleUrls: ['./search-medicine.component.css']
})
export class SearchMedicineComponent implements OnInit {

  searchValue="";
  displayedMedicineColumnsName: string[] = ['ID', 'MEDICINE_NAME', 'Price','Quantity', 'AVAIL_QUANTITY', 'SELL_QUANTITY'];
  dataSource:any;
  medicineListArray:any=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  errorFlag=false;
  errorMessage="";
  constructor(private medicalStoreService: MedicalStoreService) { }

  ngOnInit(): void {
    console.log('Search Medicine -->');
    
  }

  searchMedicine(){
    console.log('going to Search Medicine by name -'+this.searchValue);
    if(this.searchValue!=""){
    this.medicalStoreService.searchMedicine(this.searchValue).subscribe(response=>{
      if(response){
        this.populateMedicineDetails(response);
        this.dataSource = new MatTableDataSource(this.medicineListArray);
      }else{
        console.log("Response is empty");
        this.errorFlag=true;
        this.errorMessage="Search medicine is not found!";
      }
    },error=>{
      console.log("ERROR - Search medicine failed : ",error);
    })
    }else{
      console.log("medicine name is empty for search");
    }
  }
  populateMedicineDetails(medicineDetails){
    this.medicineListArray.push({
     "ID": medicineDetails['id'],
     "MEDICINE_NAME" : medicineDetails['medicineName'],
     "Price": medicineDetails['price'],
     "Quantity": medicineDetails['quantity'],
     "AVAIL_QUANTITY": medicineDetails['avail_med_quantity'],
     "SELL_QUANTITY": medicineDetails['sell_med_qantity']
   })   
  }

  dismissedSearch(){
    console.log("dismissed Search Results!");
    this.medicineListArray.length = 0
  }
}
