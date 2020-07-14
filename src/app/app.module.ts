import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {   AccordionModule,
  AlertModule,        // Foundation Callouts
  ButtonsModule,
  CarouselModule,     // Foundation Orbit
  CollapseModule,
  BsDatepickerModule,
  BsDropdownModule,   // Foundation Dropdown Menus and Dropdown Panes
  ModalModule,        // Foundation Reveal
  OffcanvasModule,
  PaginationModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule, } from 'ngx-foundation';
import { FundosOramaComponent } from './fundos-orama/fundos-orama.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    FundosOramaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),        // Foundation Callouts
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),     // Foundation Orbit
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),   // Foundation Dropdown Menus and Dropdown Panes
    ModalModule.forRoot(),        // Foundation Reveal
    OffcanvasModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
