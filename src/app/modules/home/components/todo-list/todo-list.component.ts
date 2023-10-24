import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/TaskList';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
     {task:"item1", checked:true},
     {task:"item2", checked:false},
  ];

  public deleteItem(index: number){
    this.taskList.splice(index, 1);
  }

  public deleteItens(){
    const confirm = window.confirm("Deseja relamente deletar todos os ítens?");

    if (confirm){
      this.taskList=[];
    }

  }

  constructor() { }


  ngOnInit(): void {
  }

}
