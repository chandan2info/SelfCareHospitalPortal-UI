import { AddMedicineService } from './../service/add-medicine.service';
import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})

export class AddMedicineComponent implements OnInit {
  addMedicineForm: FormGroup;
  medicine:any;
  constructor(private fb: FormBuilder,private http: HttpClient,private addMedicineService: AddMedicineService) { }

  ngOnInit(): void {
    this.addMedicineForm = this.fb.group({
      medicineName: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      price:  new FormControl('', [Validators.required])
    });
  }

  getFormValues(){
    return this.addMedicineForm.controls;
  }
  onSubmit(){
    console.log("add medicine start submition...");
    var addMedicineObj = {
      "medicineName" : this.getFormValues().medicineName.value,
      "quantity" : this.getFormValues().quantity.value,
      "price" : this.getFormValues().price.value,
      "sell_med_qantity" : "",
      "avail_med_quantity" : ""
    };
    this.addMedicineService.addMedicine(addMedicineObj).subscribe((response:any)=>{
      if(response == 'SUCCESS!'){

      }else{
        this.showAlert('Failed!','Medicine Addition failed');
      }
    },error=>{
      console.log('Error - AddMedicine', error);
      this.showAlert('Failed!','Medicine Addition failed');
    })

  }//end add-medicine

  showAlert(title, body){

  }
 
}
