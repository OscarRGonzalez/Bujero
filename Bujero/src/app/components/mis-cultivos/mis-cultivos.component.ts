import { Component } from '@angular/core';
import { BujeroDataService } from '../../bujero-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-cultivos',
  templateUrl: './mis-cultivos.component.html',
  styleUrls: ['./mis-cultivos.component.css']
})
export class MisCultivosComponent {
  
  usuario = 'asas@gmail.com';
  
  usuarios: any[] = [];
  plantas: any[] = [];
  plantasCultivadas: any[] = [];
  favorito = false;
  misCultivos = false;
  plantaBuscada = "";
  tarde = false;

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
    console.log(this.plantas);
    console.log(this.plantasCultivadas);
    this.usuario = this.bujeroDataService.getUserFromSessionStorage();
    console.log(this.usuario);
    if (!this.usuario) {
      alert('Inicio de sesión requerido');
      this.router.navigate(['/login']);
    }
    this.plantasCultivadas = this.bujeroDataService.getMisCultivos(this.usuario);

  }
  
  seedClicked(planta: any) {
    this.plantaBuscada = planta.nombre;
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
  starClicked(planta: any) {
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
  comprobarFavorito(planta: any){
    return this.bujeroDataService.isPlantaInFavorites(this.usuario, planta.nombre);
  }
  comprobarMisCultivos(planta: any){
    return this.bujeroDataService.isPlantaInMisCultivos(this.usuario, planta.nombre);
  }
  mostrarPlanta(planta: any){
    console.log(planta);
    this.router.navigate(['/planta'], { state: { planta } });
  }

  notaKey( planta: any, event: any ){
    this.bujeroDataService.editPlantaNota(this.usuario, planta.nombre, event.target.value);
  }

  tardeClick(planta: any, event: any ){
    this.bujeroDataService.editCheckTarde(this.usuario, planta.nombre, event.target.checked);

  }
  manianaClick( planta: any, event: any ){
    this.bujeroDataService.editCheckManiana(this.usuario, planta.nombre, event.target.checked);
  
  }
}
