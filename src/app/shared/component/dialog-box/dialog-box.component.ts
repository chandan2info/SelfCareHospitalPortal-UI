import { MedicalStoreService } from './../../../dashboard/component/service/medical-store.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  name:any="";

  
  constructor(private dialogRef: MatDialogRef<DialogBoxComponent>,private medicalStoreService: MedicalStoreService) { }

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
