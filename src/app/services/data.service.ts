import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
options={
  withCredentials:true
}
  constructor(private http:HttpClient) { }
  
 
  showTodos(){
   
    return this.http.post('http://localhost:3000/showTodos',this.options)
  }

}
