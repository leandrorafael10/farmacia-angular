import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { FormatMoedaPipe } from './format-moeda.pipe';
import { FormatDataPipe } from './format-data.pipe';
import { MyDirective } from './my.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    FormatMoedaPipe,
    FormatDataPipe,
    MyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
