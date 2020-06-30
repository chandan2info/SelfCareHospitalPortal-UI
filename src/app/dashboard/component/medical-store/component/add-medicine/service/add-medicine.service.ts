import { environment } from './../../../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddMedicineService {

  constructor(private http: HttpClient) { }

  addMedicine(postData){
    var url = `${environment.apiEndPoint}medicine-inventory/medicine`;
    return this.http.post(url, postData, {responseType: "json"})
  }

}
