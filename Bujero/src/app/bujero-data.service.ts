import { Injectable } from '@angular/core';
import { plantas as plantas_json } from '../assets/info_jsons/plantas';
import { usuarios as usuarios_json } from '../assets/info_jsons/usuarios';

@Injectable({
  providedIn: 'root'
})
export class BujeroDataService {
  usuarios: any[] = [];
  plantas: any[] = [];

  constructor() {
    if(sessionStorage.getItem('plantas')){
      sessionStorage.setItem('plantas', JSON.stringify(plantas_json));
    }
    if(sessionStorage.getItem('usuarios')){
      sessionStorage.setItem('usuarios', JSON.stringify(usuarios_json));
    }
    console.log("Se han cargado los datos");
    const usuariosSession = sessionStorage.getItem('usuarios');
    const plantasSession = sessionStorage.getItem('plantas');

    if (usuariosSession && plantasSession) {
      this.usuarios = JSON.parse(usuariosSession);
      this.plantas = JSON.parse(plantasSession);
    }
  }



  isPlantaInFavorites(usuarioCorreo: string, plantaNombre: string): boolean {
    const usuario = this.usuarios.find((user: { correo: string }) => user.correo === usuarioCorreo);
    if (usuario) {
      const favoritos = usuario.favoritos;
      return favoritos.find((planta: { nombre: string }) => planta.nombre === plantaNombre) !== undefined;
    }
    return false;
  }

  isPlantaInMisCultivos(usuarioCorreo: string, plantaNombre: string): boolean {
    const usuario = this.usuarios.find((user: { correo: string }) => user.correo === usuarioCorreo);
    if (usuario) {
      const misCultivos = usuario.mis_cultivos;
      return misCultivos.find((planta: { nombre: string }) => planta.nombre === plantaNombre) !== undefined;
    }
    return false;
  }

  obtenerPlanta(nombre: string): any {
    return this.plantas.find((planta: { nombre: string }) => planta.nombre === nombre);
  }

  obtenerUsuario(correo: string): any {
    return this.usuarios.find((user: { correo: string }) => user.correo === correo);
  }

  guardarDatos(): void {
    sessionStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    sessionStorage.setItem('plantas', JSON.stringify(this.plantas));
  }

  addPlantaToMisCultivos(usuarioCorreo: string, plantaNombre: string): void {
    const planta = this.obtenerPlanta(plantaNombre);
    const usuario = this.obtenerUsuario(usuarioCorreo);
    if (planta && usuario) {
      const misCultivos = usuario.mis_cultivos;
      if (!misCultivos.find((planta: { nombre: string }) => planta.nombre === plantaNombre)) {
        misCultivos.push(planta);
        console.log(this.usuarios);
        this.guardarDatos();
      } else {
        console.log('La planta ya está en mis cultivos');
      }
    }
  }

  addPlantaToFavoritos(usuarioCorreo: string, plantaNombre: string): void {
    const planta = this.obtenerPlanta(plantaNombre);
    const usuario = this.obtenerUsuario(usuarioCorreo);
    if (planta && usuario) {
      const favoritos = usuario.favoritos;
      if (!favoritos.find((planta: { nombre: string }) => planta.nombre === plantaNombre)) {
        favoritos.push(planta);
        console.log(this.usuarios);
        this.guardarDatos();
      } else {
        console.log('La planta ya está en favoritos');
      }
    }
  }

  deletePlantaFromMisCultivos(usuarioCorreo: string, plantaNombre: string): void {
    const usuario = this.obtenerUsuario(usuarioCorreo);
    if (usuario) {
      const misCultivos = usuario.mis_cultivos;
      const plantaIndex = misCultivos.findIndex((planta: { nombre: string }) => planta.nombre === plantaNombre);
      if (plantaIndex !== -1) {
        misCultivos.splice(plantaIndex, 1);
        console.log(this.usuarios);
        this.guardarDatos();
      } else {
        console.log('La planta no está en mis cultivos');
      }
    }
  }

  deletePlantaFromFavoritos(usuarioCorreo: string, plantaNombre: string): void {
    const usuario = this.obtenerUsuario(usuarioCorreo);
    if (usuario) {
      const favoritos = usuario.favoritos;
      const plantaIndex = favoritos.findIndex((planta: { nombre: string }) => planta.nombre === plantaNombre);
      if (plantaIndex !== -1) {
        favoritos.splice(plantaIndex, 1);
        console.log(this.usuarios);
        this.guardarDatos();
      } else {
        console.log('La planta no está en favoritos');
      }
    }
  }
  getPlantasFavoritas(usuarioCorreo: string): any[] {
    const usuario = this.usuarios.find((user: { correo: string }) => user.correo === usuarioCorreo);
    if (usuario) {
      const favoritos = usuario.favoritos;
      return favoritos;
    }
    return [];
  }

  getMisCultivos(usuarioCorreo: string): any[] {
    const usuario = this.usuarios.find((user: { correo: string }) => user.correo === usuarioCorreo);
    if (usuario) {
      const misCultivos = usuario.mis_cultivos;
      return misCultivos;
    }
    return [];
  }
  getPlantasEstaciones(estacion: string): any[] {
    const plantasEstacion = this.plantas.filter((planta: { estaciones: string[] }) => planta.estaciones.includes(estacion));
    return plantasEstacion;
  }
  agregarUsuario(usuario: any): void {
    this.usuarios.push(usuario);
    this.guardarDatos();
  }
  getUserFromSessionStorage(): any {
    const user = sessionStorage.getItem('usuario');
    console.log(user);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }
}
