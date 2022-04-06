import { Component, OnInit } from '@angular/core';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';

const centeromapa1: google.maps.LatLngLiteral = {lat: 40.4381311, lng: -3.8196233};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'Emergencias';
  public markers: any[];
  public zoom: number;
  public centromapa: any;



  constructor() {
    this.markers = [];
    this.zoom = 5;
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
