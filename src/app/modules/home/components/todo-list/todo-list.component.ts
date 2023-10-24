import { Component, OnInit, DoCheck } from '@angular/core';
import { TaskList } from '../../model/TaskList';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("ListaStorage") || '[]' );

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

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public setLocalStorage(){
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("ListaStorage", JSON.stringify(this.taskList));
    }

  }


  ngOnInit(): void {
  }



  public validationInput(item: string, index:number){
    if (!item.length){
      const confirm = window.confirm("Task está vazia, deseja deletar?");
      if (confirm) {
        this.deleteItem(index);
      }
    }
  }

}
