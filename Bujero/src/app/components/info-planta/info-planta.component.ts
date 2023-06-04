import { Component } from '@angular/core';
import { plantas as plantas_json } from '../../../assets/info_jsons/plantas';
import { usuarios as usuarios_json } from '../../../assets/info_jsons/usuarios';
import { BujeroDataService } from '../../bujero-data.service';


@Component({
  selector: 'app-info-planta',
  templateUrl: './info-planta.component.html',
  styleUrls: ['./info-planta.component.css']
})
export class InfoPlantaComponent {

  constructor(private bujeroDataService: BujeroDataService) {
    
  }
  ngOnInit(): void {
    this.plantaMostrada = this.bujeroDataService.obtenerPlanta(this.plantaBuscada);
    console.log(this.usuarios);
    this.iamgenes_prueba = Object.values(this.plantaMostrada.imagenes);
  }

  usuario = 'asas@gmail.com';

  usuarios: any = usuarios_json;
  plantas: any = plantas_json;
  plantaBuscada = 'Coleo';
  plantaMostrada: any = [];
  iamgenes_prueba: any = [];
  favorito = false;
  misCultivos = false;

  seedClicked() {
    console.log(this.bujeroDataService.usuarios);
    console.log(this.bujeroDataService.plantas);
    const plantaColeo = this.bujeroDataService.obtenerPlanta(this.plantaBuscada);
    console.log(plantaColeo);

    const usuarioIndex = this.bujeroDataService.usuarios.findIndex(
      (user: { correo: string }) => user.correo === this.usuario
    );
    if (usuarioIndex !== -1) {
      // Verificar si la planta ya está en mis cultivos
      if (!this.bujeroDataService.isPlantaInMisCultivos(this.usuario, this.plantaBuscada)) {
        this.bujeroDataService.addPlantaToMisCultivos(this.usuario, this.plantaBuscada);
        console.log(this.bujeroDataService.usuarios);
        this.misCultivos = true;
      } else {
        // preguntar si quiere eliminarla de mis cultivos y luego eliminarla
        if (confirm('La planta ya está en mis cultivos. ¿Deseas eliminarla?')) {
          this.bujeroDataService.deletePlantaFromMisCultivos(this.usuario, this.plantaBuscada);
          console.log(this.bujeroDataService.usuarios);
          this.misCultivos = false;
        }
        console.log('La planta ya está en mis cultivos');
      }
    }

    sessionStorage.setItem('usuarios', JSON.stringify(this.bujeroDataService.usuarios));
  }

  starClicked() {
    console.log(this.bujeroDataService.usuarios);
    const plantaColeo = this.bujeroDataService.obtenerPlanta(this.plantaBuscada);
    console.log(plantaColeo);

    const usuarioIndex = this.bujeroDataService.usuarios.findIndex(
      (user: { correo: string }) => user.correo === this.usuario
    );
    if (usuarioIndex !== -1) {
      // Verificar si la planta ya está en favoritos
      if (!this.bujeroDataService.isPlantaInFavorites(this.usuario, this.plantaBuscada)) {
        this.bujeroDataService.addPlantaToFavoritos(this.usuario, this.plantaBuscada);
        console.log(this.bujeroDataService.usuarios);
        this.favorito = true;
      } else {
        // pedir confirmación para eliminar de favoritos y luego eliminarla
        if (confirm('La planta ya está en favoritos. ¿Deseas eliminarla?')) {
          this.bujeroDataService.deletePlantaFromFavoritos(this.usuario, this.plantaBuscada);
          console.log(this.bujeroDataService.usuarios);
          this.favorito = false;
        }
        console.log('La planta ya está en favoritos');
      }
    }
    sessionStorage.setItem('usuarios', JSON.stringify(this.bujeroDataService.usuarios));
  }
  comprobarFavorito(){
    if(this.bujeroDataService.isPlantaInFavorites(this.usuario, this.plantaBuscada)){
      this.favorito = true;
    }
    return this.favorito;
  }
  comprobarMisCultivos(){
    if(this.bujeroDataService.isPlantaInMisCultivos(this.usuario, this.plantaBuscada)){
      this.misCultivos = true;
    }
    return this.misCultivos;
  }
}
