import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { CompleteComponent } from './complete/complete.component';

const routes: Routes = [
  {path:'addtask',component:AddTaskComponent},
  {path:'viewtask',component:ViewTaskComponent},
  {path:'completetask',component:CompleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
