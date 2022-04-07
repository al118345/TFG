import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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

 
*/

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
    
  }
  /*
  private map:any;
  @Input() lat: number = DEFAULT_LAT;
  @Input() lon: number = DEFAULT_LON;
  @Input() titulo: string = TITULO ;
 
  constructor() {
  }
 
  ngOnInit(): void {
    this.initMap();
  }
 
 
 
  private initMap(): void {
      //configuración del mapa
      this.map = L.map('map', {
        center: [this.lat, this.lon],
        attributionControl: false,
        zoom: 14
      });
 
      //iconos personalizados
      var iconDefault = L.icon({
        iconRetinaUrl,
        iconUrl,
        shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      });
     L.Marker.prototype.options.icon = iconDefault;
 
      //titulo
      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://1938.com.es">Web Inteligencia Artificial</a>'
      });
 
      //marca con pop up
      const lon = this.lon + 0.009;
      const lat = this.lat + 0.009;
      const marker = L.marker([lat + 0.005, lon + 0.005]).bindPopup(this.titulo);
      marker.addTo(this.map);
 
      //marca forma de circulo
      const mark = L.circleMarker([this.lat, this.lon]).addTo(this.map);
      mark.addTo(this.map);
 
 
    //ruta
    L.Routing.control({
      router: L.Routing.osrmv1({
        serviceUrl: `https://router.project-osrm.org/route/v1/`
      }),
      showAlternatives: true,
      fitSelectedRoutes: false,
      show: false,
      routeWhileDragging: true,
      waypoints: [
        L.latLng(this.lat, this.lon),
        L.latLng(lat, lon)
      ]
    }).addTo(this.map);
      tiles.addTo(this.map);
    }*/
}