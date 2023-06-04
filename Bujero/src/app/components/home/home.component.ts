import { Component } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private shareService: SharedServiceService ) {
    this.shareService.setParam("Home")
  }

  changePrimavera() {
    this.shareService.setParam("Primavera")
  }

  changeVerano() {
    this.shareService.setParam("Verano")
  }

  changeOtonio() {
    this.shareService.setParam("Otoño")
  }

  changeInvierno() {
    this.shareService.setParam("Invierno")
  }

  changeTodasEstaciones() {
    this.shareService.setParam("General")
  }
}
