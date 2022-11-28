import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
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

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    NavbarComponent,
    ViewTodoComponent,
    NavbarComponent
  ],
  
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(myRouter),FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
