import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center: any;
  position: any;
  label: string;
  circleOptions: { fillColor: string; };
  markerOptions!: google.maps.MarkerOptions;
  vertices!: google.maps.LatLngLiteral[];
  vertices1!: google.maps.LatLngLiteral[];



  constructor() {
    this.center = { lat: 45.506738, lng: 9.190766 };
    this.position = this.center;
    this.label = "ciao";
    this.circleOptions = { fillColor: 'red' }
    let iconData: google.maps.Icon = {
      url: 'angular-maps/src/app/img/cat_acrobat.ico',
      scaledSize: new google.maps.Size(60, 60)
    }

    this.markerOptions = { icon: iconData }
    this.vertices = [
      { lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      { lat: this.center.lat, lng: this.center.lng },
      { lat: this.center.lat - 0.001, lng: this.center.lng - 0.002 }
    ];
    // this.vertices1 = [
    //   { lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
    //   { lat: this.center.lat, lng: this.center.lng },
    //   { lat: this.center.lat - 0.001, lng: this.center.lng - 0.002 }
    // ];
  }
}