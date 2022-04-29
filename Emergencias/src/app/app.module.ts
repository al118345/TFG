import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapaComponent } from './mapa/mapa.component';
import { ResidenciainfoComponent } from './residenciainfo/residenciainfo.component';
import { ResidenciainfoService } from './residenciainfo/residenciainfo.service';
import { ApiService } from './api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



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
    HttpClientModule
  ],
  providers: [ResidenciainfoService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
