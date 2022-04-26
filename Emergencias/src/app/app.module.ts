import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapaComponent } from './mapa/mapa.component';
import { ResidenciainfoComponent } from './residenciainfo/residenciainfo.component';
import { ResidenciainfoService } from './residenciainfo/residenciainfo.service';



@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    ResidenciainfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
  ],
  providers: [ResidenciainfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
