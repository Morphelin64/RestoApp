import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DatasService } from '../datas.service';
import { Table } from './table';
import { Plate } from '../room-editor/plate';

@Component({
  selector: 'app-table-editor',
  templateUrl: './table-editor.component.html',
  styleUrls: ['./table-editor.component.css']
})
export class TableEditorComponent implements OnInit {

  @Input() index: number;
  @Input() maxPlates: number;

  public nbPlates = new FormControl(2);
  public over: boolean;
  public buttonName = 'Valider';
  public tableValidationState: boolean;
  // public maxPpTable = new FormControl(10);

  constructor(
    private datasService: DatasService
  ) {}

  ngOnInit() {
    this.over = false;
    this.tableValidationState = true;
  }
  // On génère les couverts si le client valide sa création de table
  createPlates = (n: FormControl): Plate[] => {
    console.log('this.tableValidationState : ', this.tableValidationState);
    if (this.tableValidationState) {
      return this.datasService.createPlatesArrayFromNumber(n.value);
    }
    // console.log('this.tableValidationState : ', this.tableValidationState);
  }

  createArray = (n: number): number[] => {
    return this.datasService.createNumbersArrayFromNumber(n);
  }

  changeButtonName = () => {
    this.tableValidationState = !this.tableValidationState;
    this.buttonName = this.datasService.changeButtonStateName('Valider', 'Modifier', this.tableValidationState);
  }


  createTable = ( plates: Plate[], tableId: number ): Table => {
    console.log('tableId: ', tableId);
    return this.datasService.createNewTable(plates, tableId);
  }

}
