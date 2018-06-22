import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  addCarDetail(data){
    return this.http.post("https://mean-exam.herokuapp.com/saveCarDetails",data)
  }

  getCarDetail(){
    return this.http.get("https://mean-exam.herokuapp.com/getAllCarDetail")
  }
}
