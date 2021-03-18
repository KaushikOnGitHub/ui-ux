import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericComponent } from './generic/generic.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { LoopComponent } from './loop/loop.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericComponent,
    ConditionalComponent,
    LoopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
