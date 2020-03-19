import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private service:TaskService) { }
  sendTask(data){
    this.service.send(data).subscribe(data=>{
      console.log(data)
    },err=>{
      console.log(err)
    },()=>{
      console.log('sent successfully');
    })
  }
  ngOnInit() {
  }

}
