import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MapInfoWindow, MapMarker } from "@angular/google-maps";
import { GoogleMap } from '@angular/google-maps';
import { map } from 'rxjs';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @ViewChildren(MapInfoWindow)
  infoWindowsView!: QueryList<MapInfoWindow>;
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
    this.zoomapa = 10;
    this.centromapa = {lat: marker.position.lat,lng: marker.position.lng};
    console.log(marker.label);
  }

  mostrarinfo(marker:MapMarker,windowIndex: number){
    
    let curIdx = 0;
  this.infoWindowsView.forEach((window: MapInfoWindow) => {
    if (windowIndex === curIdx) {
      window.open(marker);
      curIdx++;
    } else {
      curIdx++;
    }
  });
    
  }
  

}
