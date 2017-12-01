import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ClarityModule} from 'clarity-angular'
import { AppComponent } from './app.component';
import { ChatScreenComponent } from './components/chat-screen/chat-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatScreenComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
