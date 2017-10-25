import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Room } from './room';
import { Table } from '../table-editor/table';
import { DatasService } from '../datas.service';


@Component({
  selector: 'app-room-editor',
  templateUrl: './room-editor.component.html',
  styleUrls: ['./room-editor.component.css']
})
export class RoomEditorComponent implements OnInit {

  public nbTables = new FormControl('');
  public maxPpTable = new FormControl(10);
  public room: Room;
  public tables: Table[];

  constructor(private datasService: DatasService ) {}

  ngOnInit() {
  }

  createTables = (n: FormControl): number[] => {
    return this.datasService.createNumbersArrayFromNumber(n.value);
  }
  createArray = (n: number): number[] => {
    return this.datasService.createNumbersArrayFromNumber(n);
  }

  preventTypingMoreTables = () => {
       // this.datasService.preventInputTypingOtherThanPattern( event, tableMaxPattern );
  }

  // createRoom = (): Table[] => {

  // }

}
