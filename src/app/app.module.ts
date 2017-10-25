import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppLogin } from './app.login';
import { RoomEditorComponent } from './room-editor/room-editor.component';
import { TableEditorComponent } from './table-editor/table-editor.component';
import { TableSvgComponent } from './graphics-components/table-svg/table-svg.component';
import { PlateSvgComponent } from './graphics-components/plate-svg/plate-svg.component';
import { CheckedSvgComponent } from './graphics-components/checked-svg/checked-svg.component';

import { DatasService } from './datas.service';

@NgModule({
  declarations: [
    AppComponent,
    AppLogin,
    RoomEditorComponent,
    TableEditorComponent,
    TableSvgComponent,
    PlateSvgComponent,
    CheckedSvgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
