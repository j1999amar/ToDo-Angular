import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
const myRouter: Routes = [
  {
    path: '',
    component: ViewTodoComponent,
  },
  {
    path: 'addTodo',
    component: AddTodoComponent,
  },
];
import { EditTodoComponent } from './edit-todo/edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    NavbarComponent,
    ViewTodoComponent,
    NavbarComponent,
    EditTodoComponent
  ],
 
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(myRouter),FormsModule,HttpClientModule],
  
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
