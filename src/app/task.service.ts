import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  backendUrl="http://localhost:3000";
  totalTask:any;
  completeTask:any;


constructor(private http:HttpClient) {
  this.get();this.getComplete();
 }
  send(data){
    return this.http.post(`${this.backendUrl}/addTask`,data)
  }
  get(){
   this.http.get(`${this.backendUrl}/viewTask`).subscribe(data=>{
    this.totalTask=data
  },err=>{
    console.log(err)
  },()=>{
    console.log("got successfully")
  })

  }
  updateEmp(data){
   return this.http.post(`${this.backendUrl}/editTask`,data)
  }
deleteTask(id){
  return this.http.delete(`${this.backendUrl}/deleteTask/${id}`)
}
postComplete(data){
  return this.http.post(`${this.backendUrl}/completeTask`,data)

}


getComplete(){
  this.http.get(`${this.backendUrl}/completeTask`).subscribe(data=>{
   this.completeTask=data
 },err=>{
   console.log(err)
 },()=>{
   console.log("got to route successfully")
 })
}
}
