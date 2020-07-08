import { FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.css']
})
export class EditMedicineComponent implements OnInit {
  editForm:FormGroup;
  inputData:any;
  constructor(@Inject(MAT_DIALOG_DATA) data:any, private dialogRef: MatDialogRef<any>) { 
    this.inputData = data;
  }

  ngOnInit(): void {
  }

  updateMedicine(){
    alert("update");
    
  }

  close(){
    this.dialogRef.close();
  }
}
