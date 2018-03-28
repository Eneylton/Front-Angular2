import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TabelaGridComponent } from './tabela-grid/tabela-grid.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {ToolbarModule} from 'primeng/components/toolbar/toolbar';
import { ButtonModule } from 'primeng/components/button/button';


@NgModule({
  declarations: [
    AppComponent,
    TabelaGridComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    ToolbarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
