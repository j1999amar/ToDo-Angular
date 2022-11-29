import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent {
  constructor(private api:ServiceService){  
    api.fetchData().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
  
  data:any=[]

}
