import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-mis-cultivos',
  templateUrl: './card-mis-cultivos.component.html',
  styleUrls: ['./card-mis-cultivos.component.css']
})
export class CardMisCultivosComponent {
  @Input() fecha_agregada: string | undefined;
  @Input() nombre: string | undefined;
  @Input() imagen_planta: string | undefined;
  @Input() nota: string | undefined;
  @Input() maniana_check: boolean | undefined;
  @Input() tarde_check: boolean | undefined;
}
