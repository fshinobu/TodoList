import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/TaskList';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [

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

  public setEmitTaskList(inputItem: string){

    if(inputItem.trim()){
      this.taskList.push({task: inputItem, checked:false});
    }

  }

  constructor() { }


  ngOnInit(): void {
  }

}
