import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './models/booking.model';
import { Room } from './models/room.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hotel';
  obsRooms : Observable<Booking[]> = undefined!
  data : Booking[] = undefined!
  selectedRoom : Room = new Room()
constructor (private http : HttpClient){

}
ngOnInit(): void {
  this.obsRooms = this.http.get<Booking[]>('https://my-json-server.typicode.com/malizia-g/hotel/booking');
  this.obsRooms.subscribe(this.faiqualcosa)
}
faiqualcosa = (data : Booking[]) =>{
  this.data = data
}
}
