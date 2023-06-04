import { Component } from '@angular/core';
import { BujeroDataService } from '../../bujero-data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estacion',
  templateUrl: './estacion.component.html',
  styleUrls: ['./estacion.component.css']
})
export class EstacionComponent {
  usuario = '';
  
  usuarios: any[] = [];
  plantas: any[] = [];
  plantasEstaciones: any[] = [];
  favorito = false;
  misCultivos = false;
  plantaBuscada = "";
  estacion = "";

  constructor(private bujeroDataService: BujeroDataService, private router: Router, private route: ActivatedRoute) {
    const usuariosSession = sessionStorage.getItem('usuarios');
    const plantasSession = sessionStorage.getItem('plantas');

    if (usuariosSession && plantasSession) {
      this.usuarios = JSON.parse(usuariosSession);
      this.plantas = JSON.parse(plantasSession);
    }
  }
  
  ngOnInit(): void {
    console.log(this.usuarios);
    console.log(this.plantasEstaciones);
    console.log(this.estacion);
    console.log(this.usuario);

    if (this.bujeroDataService.getUserFromSessionStorage()) {
      this.usuario = this.bujeroDataService.getUserFromSessionStorage();
    }

    if (history.state && history.state.estacion) {
      this.estacion = history.state.estacion;
    }

    if (this.estacion === "todas") {
      this.plantasEstaciones = this.plantas;
    } else {
    this.plantasEstaciones = this.bujeroDataService.getPlantasEstaciones(this.estacion);
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
  mostrarPlanta(planta: any){
    console.log(planta);
    this.router.navigate(['/planta'], { state: { planta } });
  }
}


