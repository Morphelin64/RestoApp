import { Injectable } from '@angular/core';

import { Plate } from './room-editor/plate';
import { Table } from './table-editor/table';

@Injectable()
export class DatasService {

  constructor() { }

  createNewTable = (plates: Plate[], tableId: number): Table => {
    console.log('plates : ', plates, ' tableId : ', tableId);
    const table = new Table();
    table.id = tableId;
    table.plates = plates;
    table.state = 'new';
    table.xPos = 0;
    table.yPos = 0;
    return table;
  }

  changeButtonStateName = (state1: string, state2: string, checker: boolean): string => {
    return (checker) ? state1 : state2;
  }

  createPlatesArrayFromNumber = ( n: number ): Plate[] => {
    const plateA = new Array();
    for (let i = 0; i < n; i++ ) {
      plateA.push({plateId : i + 1 });
    }
    return plateA;
  }

  createNumbersArrayFromNumber = ( n: number ): number[] => {
    const array = new Array();
    for (let i = 0; i < n; i++) {
      array.push(i);
    }
    return array;
  }

  preventInputTypingOtherThanPattern = (event: any,  pattern: RegExp ): void => {
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
}
