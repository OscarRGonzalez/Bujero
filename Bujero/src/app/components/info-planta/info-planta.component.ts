import { Component } from '@angular/core';

@Component({
  selector: 'app-info-planta',
  templateUrl: './info-planta.component.html',
  styleUrls: ['./info-planta.component.css']
})
export class InfoPlantaComponent {

  planta = 'Margarita';
  descripcion = 'La margarita es una planta herbácea, perenne, de la familia de las compuestas, con tallos de hasta 60 cm de altura, erectos, ramificados y pubescentes. Las hojas son alternas, pecioladas, de 2-7 cm de largo, ovadas, dentadas, con pelos glandulares y no glandulares. Las flores son blancas, con el centro amarillo, de 2-3 cm de diámetro, dispuestas en capítulos solitarios en el extremo de los tallos. Los frutos son aquenios de 1-2 mm de largo, con vilano de 2-3 mm de largo.';
  estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'];
  dondeSembrar = 'se puede sembrar en cualquier lugar en el que le de el sol'; 
  cuidados = ['regarla cada 2 dias', 'cortarla cada 2 meses', 'abonarla cada 3 meses'];
  crecimientos = ['crece 1 cm por mes', 'crece 2 cm por mes', 'crece 3 cm por mes'];
  imagenes = ["/assets/img/Coleo.png","/assets/img/margarita-partes.jpg","/assets/img/margarita.jpg"]

  seedClicked() {
    alert('Se ha enviado una solicitud de semilla');
  }
  starClicked() {
    alert('Se ha enviado una solicitud de estrella');
  }
  



}
