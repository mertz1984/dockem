import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Tooltip, Toast, Popover } from 'bootstrap';
import { AppComponent } from './app.component';
import { PenaltyDisplayComponent } from './penalty-display/penalty-display.component';
import { PenaltyAddComponent } from './penalty-add/penalty-add.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PenaltyDisplayComponent, PenaltyAddComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
