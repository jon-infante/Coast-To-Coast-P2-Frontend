import { Component, OnInit } from '@angular/core';
import { DrawingapiService } from 'src/app/services/drawingapi.service';
import { Drawing } from '../../models/drawing';

@Component({
  selector: 'app-drawing-list',
  templateUrl: './drawing-list.component.html',
  styleUrls: ['./drawing-list.component.css']
})
export class DrawingListComponent implements OnInit {
 

  constructor(private drawingapi : DrawingapiService) { }
  allDrawings : Drawing [] =  []
  
  ngOnInit(): void {
    this.getdrawingbyPlayerId()
    console.log(this.allDrawings);
    
  }
  getdrawingbyPlayerId() {
  // this.drawingapi.getAllDrawingByPlayerID().then((drawingArray) => 
  // {
  //   this.allDrawings = drawingArray
  // })
  this.drawingapi.getAllDrawingByPlayerID().subscribe(data => this.allDrawings = data);
  }
}
