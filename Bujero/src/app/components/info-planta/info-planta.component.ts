import { Component } from '@angular/core';
import { BujeroDataService } from '../../bujero-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-info-planta',
  templateUrl: './info-planta.component.html',
  styleUrls: ['./info-planta.component.css']
})
export class InfoPlantaComponent {
  usuario = '';

  usuarios: any[] = [];
  plantas: any[] = [];
  plantaBuscada = '';
  plantaMostrada: any = [];
  iamgenes_prueba: any = [];
  favorito = false;
  misCultivos = false;

  constructor(private bujeroDataService: BujeroDataService, private router: Router) {
    const usuariosSession = sessionStorage.getItem('usuarios');
    const plantasSession = sessionStorage.getItem('plantas');

    if (usuariosSession && plantasSession) {
      this.usuarios = JSON.parse(usuariosSession);
      this.plantas = JSON.parse(plantasSession);
    }
  }
  ngOnInit(): void {
    console.log(this.usuarios);
    console.log(this.plantas)
    if (history.state && history.state.planta) {
      this.plantaMostrada = history.state.planta;
    }
    if (this.bujeroDataService.getUserFromSessionStorage()) {
      this.usuario = this.bujeroDataService.getUserFromSessionStorage();
    }

    
  }

  seedClicked(planta: any) {
    if (!this.bujeroDataService.getUserFromSessionStorage()) {
      alert('Inicio de sesión requerido');
      this.router.navigate(['/login']);
    }
    this.plantaBuscada = planta.nombre;
    console.log(this.bujeroDataService.usuarios);
    console.log(this.bujeroDataService.plantas);
    const plantaColeo = this.bujeroDataService.obtenerPlanta(this.plantaBuscada);
    console.log(plantaColeo);
    console.log(this.usuario);  

    const usuarioIndex = this.bujeroDataService.usuarios.findIndex(
      (user: { correo: string }) => user.correo === this.usuario
    );
    console.log(usuarioIndex);
    if (usuarioIndex !== -1) {
      // Verificar si la planta ya está en mis cultivos
      if (!this.bujeroDataService.isPlantaInMisCultivos(this.usuario, this.plantaBuscada)) {
        this.bujeroDataService.addPlantaToMisCultivos(this.usuario, this.plantaBuscada);
        console.log(this.bujeroDataService.usuarios);
      } else {
        // preguntar si quiere eliminarla de mis cultivos y luego eliminarla
        if (confirm('La planta ya está en mis cultivos. ¿Deseas eliminarla?')) {
          this.bujeroDataService.deletePlantaFromMisCultivos(this.usuario, this.plantaBuscada);
          console.log(this.bujeroDataService.usuarios);
        }
        console.log('La planta ya está en mis cultivos');
      }
    }

    sessionStorage.setItem('usuarios', JSON.stringify(this.bujeroDataService.usuarios));
  }

  starClicked(planta: any) {
    if (!this.bujeroDataService.getUserFromSessionStorage()) {
      alert('Inicio de sesión requerido');
      this.router.navigate(['/login']);
    }
    this.plantaBuscada = planta.nombre;
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
      } else {
        // pedir confirmación para eliminar de favoritos y luego eliminarla
        if (confirm('La planta ya está en favoritos. ¿Deseas eliminarla?')) {
          this.bujeroDataService.deletePlantaFromFavoritos(this.usuario, this.plantaBuscada);
          console.log(this.bujeroDataService.usuarios);
        }
        console.log('La planta ya está en favoritos');
      }
    }
    sessionStorage.setItem('usuarios', JSON.stringify(this.bujeroDataService.usuarios));
  }

  comprobarFavorito(planta: any){
    //console.log(this.bujeroDataService.isPlantaInFavorites(this.usuario, planta.nombre))
    return this.bujeroDataService.isPlantaInFavorites(this.usuario, planta.nombre);
  }
  comprobarMisCultivos(planta: any){
    //console.log(this.bujeroDataService.isPlantaInMisCultivos(this.usuario, planta.nombre))
    return this.bujeroDataService.isPlantaInMisCultivos(this.usuario, planta.nombre);
  }
}
