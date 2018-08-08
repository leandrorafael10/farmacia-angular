import { Component} from '@angular/core';
import { Task} from '../model/task';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent{

  list=[];
  task:Task={
    nome: "",
    valor:0,
    date:"2017-07-03",

  };

  add(){
    let task = Object.assign({},this.task);
    this.list.push(task);
  }

}
