import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EstacionComponent } from './components/estacion/estacion.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { InfoPlantaComponent } from './components/info-planta/info-planta.component';
import { LoginComponent } from './components/login/login.component';
import { MisCultivosComponent } from './components/mis-cultivos/mis-cultivos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { routing } from "./app-routing";
import { CardMisCultivosComponent } from './components/card-mis-cultivos/card-mis-cultivos.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedServiceService } from './shared-service.service';
import { LogOutComponent } from './components/log-out/log-out.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InicioComponent,
    EstacionComponent,
    BusquedaComponent,
    FavoritosComponent,
    InfoPlantaComponent,
    LoginComponent,
    MisCultivosComponent,
    RegistroComponent,
    CardMisCultivosComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
