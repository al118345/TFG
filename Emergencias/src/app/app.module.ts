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
import { ListadoComponent } from './listado/listado.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatePipe } from './paginate.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    ResidenciainfoComponent,
    ListadoComponent,
    FooterComponent,
    HeaderComponent,
    FilterPipe,
    PaginatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [ResidenciainfoService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
