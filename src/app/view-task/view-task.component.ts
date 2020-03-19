import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor(private service:TaskService) { }
   
  

   selectedTask={
    _id:null,
    read:null
  }
  //  for editing purpose
  selectTask(task){
    console.log(task)
   this.selectedTask=task
  }
  
  updateTask(data){
    this.service.updateEmp(data).subscribe(data=>{
      console.log(data)
      this.service.get()
    },err=>{
      console.log(err)
    },()=>{
      console.log('updated successfully')
    })
  }
  deleteTask(id){
    this.service.deleteTask(id).subscribe(data=>{
      this.service.get();
      console.log(data)
    },err=>{
      console.log(err)
    },()=>{
      console.log("deleted")
    })
  }

  sendCompletedTask(data){
    this.service.postComplete(data).subscribe(data=>{
      this.deleteTask(data);
      console.log(data)
    },err=>{
      console.log(err)
    },()=>{
      console.log("posted to new collection")
    })
  }

  ngOnInit() {
  }

}
