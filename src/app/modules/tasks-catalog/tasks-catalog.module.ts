import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TasksCatalogComponent} from './tasks-catalog.component';
import { TasksColumnComponent } from './components/tasks-column/tasks-column.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [TasksCatalogComponent, TasksColumnComponent],
  exports: [TasksCatalogComponent],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class TasksCatalogModule { }
