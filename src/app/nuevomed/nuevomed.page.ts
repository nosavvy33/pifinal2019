import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
class Port {
  public id: number;
  public name: string;
}
@Component({
  selector: 'app-nuevomed',
  templateUrl: './nuevomed.page.html',
  styleUrls: ['./nuevomed.page.scss'],
})
export class NuevomedPage implements OnInit {
  frecuencia = 1; medida = "hora"; hasText=false;
  URL = "https://api.jsonbin.io/b/5cec72c8f4df3819800e9c82";
  API_KEY = "$2a$10$Y0XjAqVf.fC14BfeaWrYa.1c2vE/zwJeHKjZuNypWOXXgeKZA4bXi";
  headers = new HttpHeaders({
    'secret-key': this.API_KEY
  });

  ports: Port[];
  port: Port;

  constructor(public http: HttpClient) {
    this.http.get<Port[]>(this.URL, {headers:this.headers}).subscribe(res => this.ports = res);
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    console.log('port:', event.value);
    this.http.get<Port[]>(this.URL, {headers:this.headers}).subscribe(res => {this.ports = res;console.log(this.ports.length)});
  }

  ngOnInit() {
  }

  onClose(){
    console.log('on close: ',event);
  }

  filter(event: any){
    console.log(event.target.value);
    if(event.target.value.length > 0){
      this.hasText = true;
    }else{
      this.hasText = false;
    }
  }

  cambiarFrecuencia(){ 
    this.medida = this.frecuencia > 1 ? "horas":"hora"
  }
}
