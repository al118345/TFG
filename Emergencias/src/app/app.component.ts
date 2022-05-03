import { Component, OnInit } from '@angular/core';
//import {MapInfoWindow, MapMarker} from '@angular/google-maps';


//const centeromapa1: google.maps.LatLngLiteral = {lat: 40.4381311, lng: -3.8196233};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})


export class AppComponent{
  title = 'Emergencias';

  public latloc:any;
  public lngloc:any;



  constructor() {
   
    
  }
 /*
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.latloc = position.coords.latitude;
          this.lngloc = position.coords.longitude;
          console.log(this.latloc);
          console.log(this.latloc);
        }
      },
        (error) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
    */

}
