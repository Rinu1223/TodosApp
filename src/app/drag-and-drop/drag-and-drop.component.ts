import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {
  Todos = [];
  
  constructor(private dataservice:DataService) {
    

    this.dataservice.showTodos()
    .subscribe((result:any)=>{
      if(result){
      
      this.Todos=result.message
        
      }
     },
     (result)=>{
alert(result.error.message)
     
    })

   }

  ngOnInit(): void {
  }
 drop(event: CdkDragDrop<string[]>) {
   moveItemInArray(this.Todos, event.previousIndex, event.currentIndex);
  
  }

}
