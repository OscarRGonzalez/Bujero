import { Component } from '@angular/core';
import plantas_json from '../../../assets/info_jsons/plantas.json';
import usuarios_json from '../../../assets/info_jsons/usuarios.json';

interface Usuarios {
  [key: string]: {
    contraseña: string;
    favoritos: { [key: string]: any };
  };
}

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
  crecimientos = ['/assets/img/margarita-crecimiento.webp'];
  imagenes = ["/assets/img/Coleo.png","/assets/img/margarita-partes.jpg","/assets/img/margarita.jpg"]
  usuario = "asas@gmail.com";
  
  usuarios: Usuarios = usuarios_json;
  plantas = plantas_json;
  plantaBuscada = "Coleo";


  seedClicked() {
    alert('Se ha enviado una solicitud de semilla');
    console.log(this.plantas);
    console.log(this.usuarios);
    console.log(this.plantaBuscada);
    const plantaBuscada = "Coleo";
    
    console.log(this.usuarios[this.usuario]); // Verificar si se encuentra el usuario actual en this.usuarios
    
    const plantaEncontrada = this.plantas[plantaBuscada];
    console.log(plantaEncontrada);
  
    if (plantaEncontrada) {
      console.log(plantaEncontrada);
    } else {
      console.log("La planta no se encontró.");
    }
    
  
    if (this.usuarios[this.usuario].favoritos) { // Verificar si favoritos está inicializado para el usuario actual
      console.log("si está inicializado")
      this.usuarios[this.usuario].favoritos[plantaBuscada] = this.plantas[plantaBuscada];
    } else {
      console.log("no está inicializado")   
      this.usuarios[this.usuario].favoritos = { [plantaBuscada]: this.plantas[plantaBuscada] }; // Inicializar favoritos para el usuario actual
    }
  
    console.log(this.usuarios[this.usuario].favoritos);
  }
  starClicked() {
    alert('Se ha enviado una solicitud de estrella');
  }
  
/*
{
  "Margarita": {
    "descripcion": "la planta está en buen estado",
    "estaciones": {
      "Verano": true,
      "Primavera": true
    },
    "dondeSembrar": "en el jardin",
    "cuidados": {
      "regarla cada 2 dias": true,
      "cortarla cada 2 meses": true,
      "abonarla cada 3 meses": true
    },
    "creciemiento": {
      "imagen1": "/assets/img/margarita-crecimiento.webp",
      "imagen2": "/assets/img/margarita-crecimiento.webp"
    },
    "imagenes": {
      "imagen1": "/assets/img/Coleo.png",
      "imagen2": "/assets/img/margarita-partes.jpg",
      "imagen3": "/assets/img/margarita.jpg"
    }
  },
  "Coleo": {
    "descripcion": "la planta está en MAL estado",
    "estaciones": {
      "Verano": false,
      "Primavera": true
    },
    "dondeSembrar": "en el jardin",
    "cuidados": {
      "regarla cada 2 dias": false,
      "cortarla cada 2 meses": true,
      "abonarla cada 3 meses": true
    },
    "creciemiento": {
      "imagen1": "/assets/img/margarita-crecimiento.webp",
      "imagen2": "/assets/img/margarita-crecimiento.webp"
    },
    "imagenes": {
      "imagen1": "/assets/img/Coleo.png",
      "imagen2": "/assets/img/margarita-partes.jpg",
      "imagen3": "/assets/img/margarita.jpg"
    }
  }
}



*/
/*{
  "asas@gmail.com": {
    "contraseña": "1234",
    "favoritos": {
      "Margarita": {
        "descripcion": "la planta está en buen estado",
        "estaciones": {
          "Verano": true,
          "Primavera": true
        },
        "dondeSembrar": "en el jardin",
        "cuidados": {
          "regarla cada 2 dias": true,
          "cortarla cada 2 meses": true,
          "abonarla cada 3 meses": true
        },
        "creciemiento": {
          "imagen1": "/assets/img/margarita-crecimiento.webp",
          "imagen2": "/assets/img/margarita-crecimiento.webp"
        },
        "imagenes": {
          "imagen1": "/assets/img/Coleo.png",
          "imagen2": "/assets/img/margarita-partes.jpg",
          "imagen3": "/assets/img/margarita.jpg"
        }
      },
      "Coleo": {
        "descripcion": "la planta está en MAL estado",
        "estaciones": {
          "Verano": false,
          "Primavera": true
        },
        "dondeSembrar": "en el jardin",
        "cuidados": {
          "regarla cada 2 dias": false,
          "cortarla cada 2 meses": true,
          "abonarla cada 3 meses": true
        },
        "creciemiento": {
          "imagen1": "/assets/img/margarita-crecimiento.webp",
          "imagen2": "/assets/img/margarita-crecimiento.webp"
        },
        "imagenes": {
          "imagen1": "/assets/img/Coleo.png",
          "imagen2": "/assets/img/margarita-partes.jpg",
          "imagen3": "/assets/img/margarita.jpg"
        }
      }
    },
    "mis cultivos": {
      "Margarita": {
        "descripcion": "la planta está en buen estado",
        "estaciones": {
          "Verano": true,
          "Primavera": true
        },
        "dondeSembrar": "en el jardin",
        "cuidados": {
          "regarla cada 2 dias": true,
          "cortarla cada 2 meses": true,
          "abonarla cada 3 meses": true
        },
        "creciemiento": {
          "imagen1": "/assets/img/margarita-crecimiento.webp",
          "imagen2": "/assets/img/margarita-crecimiento.webp"
        },
        "imagenes": {
          "imagen1": "/assets/img/Coleo.png",
          "imagen2": "/assets/img/margarita-partes.jpg",
          "imagen3": "/assets/img/margarita.jpg"
        },
        "regada": {
          "mañana": true,
          "tarde": false
        },
        "nota": "la planta está en buen estado"
      },
      "Coleo": {
        "descripcion": "la planta está en MAL estado",
        "estaciones": {
          "Verano": false,
          "Primavera": true
        },
        "dondeSembrar": "en el jardin",
        "cuidados": {
          "regarla cada 2 dias": false,
          "cortarla cada 2 meses": true,
          "abonarla cada 3 meses": true
        },
        "creciemiento": {
          "imagen1": "/assets/img/margarita-crecimiento.webp",
          "imagen2": "/assets/img/margarita-crecimiento.webp"
        },
        "imagenes": {
          "imagen1": "/assets/img/Coleo.png",
          "imagen2": "/assets/img/margarita-partes.jpg",
          "imagen3": "/assets/img/margarita.jpg"
        },
        "regada": {
          "mañana": false,
          "tarde": true
        },
        "nota": "la planta está en MAL estado"
      }
    }
  }
}


*/


}
