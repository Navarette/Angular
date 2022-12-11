import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ListaprenotazioniComponent } from './listaprenotazioni/listaprenotazioni.component';
import { DettaglistanzaComponent } from './dettaglistanza/dettaglistanza.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaprenotazioniComponent,
    DettaglistanzaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
