import { MedicalStoreService } from '../../../service/medical-store.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-medicine',
  templateUrl: './delete-medicine.component.html',
  styleUrls: ['./delete-medicine.component.css']
})
export class DeleteMedicineComponent implements OnInit {

  name:any="";

  
  constructor(private dialogRef: MatDialogRef<DeleteMedicineComponent>,private medicalStoreService: MedicalStoreService) { }

  ngOnInit(): void {
  }
  

  delete(){
    this.medicalStoreService.deleteMedicine(this.name).subscribe(response=>{
      if(response){
        alert("delete Medicine");
      }
    },error=>{
      console.log("ERROR - Delete medicine failed -",error)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
