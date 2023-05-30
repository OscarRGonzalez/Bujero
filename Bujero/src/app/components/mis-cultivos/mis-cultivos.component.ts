import {Component} from '@angular/core';
import SampleJson from '../../../assets/info_jsons/mis_cultivos.json';


@Component({
  selector: 'app-mis-cultivos',
  templateUrl: './mis-cultivos.component.html',
  styleUrls: ['./mis-cultivos.component.css']
})
export class MisCultivosComponent {

  cards = SampleJson;
  constructor() {

  }




}
