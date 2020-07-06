import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicalStoreService {

  constructor(private http: HttpClient) { }

  getMedicineList(){
    var url = `${environment.apiEndPoint}medicine-inventory/medicine`;
    return this.http.get(url);
  }

  searchMedicine(query){
    var url = `${environment.apiEndPoint}medicine-inventory/medicine/`+query;
    return this.http.get(url);
  }

  deleteMedicine(query){
    var url = `${environment.apiEndPoint}medicine-inventory/medicine/${query}`;
    return this.http.delete(url);
  }
}
