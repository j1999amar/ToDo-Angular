import { Component } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  userid=""
  id=""
  title=""
  complete=""
  readValue=()=>{
    let data ={
      "User Id":this.userid,
      "Id":this.id,
      "title":this.title,
      "Complete":this.complete
    }
    console.log(data)
  }
}
