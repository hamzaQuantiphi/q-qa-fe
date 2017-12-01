import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ClarityModule} from 'clarity-angular'
import { AppComponent } from './app.component';
import { ChatScreenComponent } from './components/chat-screen/chat-screen.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {HttpClientModule} from '@angular/common/http'

import {ParticlesModule} from 'angular-particle'

@NgModule({
  declarations: [
    AppComponent,
    ChatScreenComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ParticlesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
