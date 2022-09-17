import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JenifferHeaderComponent } from './components/jeniffer-header/jeniffer-header.component';
import { JenifferTimerComponent } from './components/jeniffer-timer/jeniffer-timer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    JenifferHeaderComponent,
    JenifferTimerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
