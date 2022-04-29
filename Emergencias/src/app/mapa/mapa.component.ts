

/*import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MapInfoWindow, MapMarker } from "@angular/google-maps";
import { GoogleMap } from '@angular/google-maps';
/*
 

import * as L from 'leaflet';

import 'leaflet-routing-machine';

import { icon, Marker } from 'leaflet';

import { Inject, Input} from '@angular/core';

 

export const DEFAULT_LAT = 48.20807;

export const DEFAULT_LON =  16.37320;

export const TITULO = 'Proyecto';

const iconRetinaUrl = 'assets/marker-icon-2x.png';

const iconUrl = 'assets/marker-icon.png';

const shadowUrl = 'assets/marker-shadow.png';

 
*//*

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @ViewChild(GoogleMap, { static: true })
  map!: GoogleMap;
  
  @ViewChildren(MapInfoWindow)
  infoWindowsView!: QueryList<MapInfoWindow>;

  @ViewChild(GoogleMap)
  googlemap: any;
  public markers: any[];
  public zoomapa: number;
  public centromapa: google.maps.LatLngLiteral;
  marker: any = {};
  
  constructor() {
    this.zoomapa = 6;
    this.markers = [];
    this.centromapa = {lat: 40.4381311, lng: -3.8196233};
    
  }


  
    
  ngOnInit() {
    
    this.markers.push({
      
      position: {
        lat: 40.4381311,
        lng: -3.8196233
      },
      label: {
        color: "black",
        text: "Madrid"
      }
    });
 
    this.markers.push({
      
      position: {
        lat: 36.72314249921822, lng: -4.421610174606653
      },
      label: {
        color: "blue",
        text: "Málaga"
      }

    });
  }
  mostrartexto(marker:any){
    this.centromapa = {lat: marker.position.lat,lng: marker.position.lng};
    console.log(marker.label);
    this.zoomapa = 10;


  }

  mostrarinfo(marker:MapMarker,windowIndex: number){
    console.log(this.map.center);
    let curIdx = 0;
    this.infoWindowsView.forEach((window: MapInfoWindow) => {

      if (windowIndex === curIdx) {
        window.open(marker);
        curIdx++;
      } else {
        curIdx++;
        window.close();
      }
  });
    
  }*/
  import {LeafletService} from "src/app/service/leaflet.service";
  import { ApiService } from '../api.service';

  import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
  import { ResidenciainfoService } from '../residenciainfo/residenciainfo.service';

  import { Residencia } from '../model/residencia';

  export const DEFAULT_LAT =  40.4381311;
  export const DEFAULT_LON =  -3.8196233;
  export const TITULO = 'Residencia XXXXXX';
   
  
  @Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.css']
  })
  export class MapaComponent implements OnInit {
    private map:any;
    @Input() lat: number = DEFAULT_LAT;
    @Input() lon: number = DEFAULT_LON;
    @Input() titulo: string = TITULO ;
   
  
    public latloc: any;
    public lngloc: any;
  
    residencias!: Residencia[];

    constructor(private apiService: ApiService,private mapService: LeafletService,private ResidenciainfoService: ResidenciainfoService) {
     
    }
    ngOnInit(): void {
      if (this.mapService.L) {
          this.initMap();
      }
    }
/*
    public Residencias: Array<any> = [
    {Denominacion:"Residencia de ancianos Nuestra Señora de las Mercedes", Direccion:"Calle Granada 13",Municipio:"Alameda",CP:"29530",Telefono:"952710029",Titularidad:"Privada sin lucro",Plazas:"24",URL:"", UltActData:"03/04/2019", Email:"", Lat:37.207588, Lng:-4.657316},
    {Denominacion:"Centro Residencial Fuente Ariza", Direccion:"Calle Los Llanos 39 ",CP:"29750",Telefono:"952552530",Municipio:"Algarrobo",Titularidad:"Privada",Plazas:"40",URL:"www.residenciafuenteariza.com/", UltActData:"01/12/2020", Email:"",Lat:36.770716, Lng:-4.047478},
    {Denominacion:"Centro Residencial para mayores El Romeral", Direccion:"Calle Carril de Zamorrilla 31 - Bª El Romeral ",Municipio:"Alahurín de la Torre",CP:"29130",Telefono:"662475867",Titularidad:"Privada",Plazas:"17",URL:"", UltActData:"01/12/2020", Email:"", Lat:36.681981, Lng:-4.568648}
    ];
*/

   public hola(): void{
     console.log("Leoclick");
   }
   
    private initMap(): void {
      var iconRetinaUrl = 'assets/marker-icon-2x.png';
      var iconUrl = 'assets/marker-icon.png';
      var shadowUrl = 'assets/marker-shadow.png';
      var iconDefault: any;
      var iconDefault = this.mapService.L.icon({
        iconRetinaUrl,
        iconUrl,
        shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      });
        this.mapService.L.Marker.prototype.options.icon = iconDefault;
   
        this.map =  this.mapService.L.map('map', {
          center: [this.lat, this.lon],
          attributionControl: false,
          zoom: 6
        });
        
   
        const tiles = this.mapService.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://emergencias.dynamic-dns.net/">Web Inteligencia Artificial</a>'
        });
        
   
        const lon = this.lon + 0.009;
        const lat = this.lat + 0.009;
        const marker = this.mapService.L.marker([lat + 0.005, lon + 0.005]).bindPopup(this.titulo);
        marker.addTo(this.map);


        this.apiService.searchResidencias().subscribe((residencias: Residencia[]) => {
          this.residencias = residencias;
       //Creamos una marcaa para cada residencia y agregamos la funcion a realizar en el click.
       console.log(this.residencias);/*
        this.residencias.forEach((element: Residencia) => {
          console.log(element);
          this.mapService.L.marker([element.Latitud,element.Longitud]).bindPopup(element.Denominacion).addTo(this.map).on('click',(e: { latlng: any; }) => {
            this.ResidenciainfoService.toggle();
            this.ResidenciainfoService.actualresi(element);
          console.log(element);});
        });*/
      });

      const mark = this.mapService.L.circleMarker([this.lat, this.lon]).addTo(this.map);
      mark.bindPopup(this.titulo);
      mark.addTo(this.map);
   
       const mark2 = this.mapService.L.circleMarker([lat, lon]).addTo(this.map);
        mark2.addTo(this.map);
   
      
   
      this.mapService.L.Routing.control({
        router: this.mapService.L.Routing.osrmv1({
          serviceUrl: `https://router.project-osrm.org/route/v1/`
        }),
        showAlternatives: true,
        fitSelectedRoutes: false,
        show: false,
        routeWhileDragging: true,
        waypoints: [
          this.mapService.L.latLng(this.lat, this.lon),
          this.mapService.L.latLng(lat, lon)
        ]
      }).addTo(this.map);
   
        tiles.addTo(this.map);
      

      }
      
    }