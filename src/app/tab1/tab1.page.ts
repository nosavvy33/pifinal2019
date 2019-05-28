import { Component } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  map: GoogleMap;

  ioViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
    let mapOptions: GoogleMapOptions = {
      camera: {
        target:{
          lat: 43.0741904,
          lng: -89.380981
        },
        zoom: 10,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas',mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: "Ionic",
      icon: "blue",
      animation: "DROP",
      position:{
        lat: 43.0741904,
        lng: -89.380981
      }
    });

    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(()=>{
      alert('clicked')
    });


  }
}
