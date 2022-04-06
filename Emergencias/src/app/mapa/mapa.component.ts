import { Component, OnInit } from '@angular/core';

const centeromapa1: google.maps.LatLngLiteral = {lat: 40.4381311, lng: -3.8196233};

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  public markers: any[];
  public zoom: number;
  public centromapa: any;
  
  constructor() {
   
    this.markers = [];
    this.zoom = 6;
    this.centromapa = centeromapa1;
    
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
        color: "black",
        text: "Málaga"
      }
    });
  }

}
