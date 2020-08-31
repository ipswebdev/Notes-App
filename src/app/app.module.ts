import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NotesItemComponent } from './notes/notes-item/notes-item.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NotesResolver } from "./shared/noteResolver.service";
import { NotesService } from './shared/notes.service';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesItemComponent,
    NotesDetailComponent,
    PathNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }