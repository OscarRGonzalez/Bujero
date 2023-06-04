import { RouterModule } from '@angular/router';

//aquí se definen las rutas de cada componente
import { HomeComponent } from './components/home/home.component';

import { LoginComponent} from "./components/login/login.component";
import {RegistroComponent} from "./components/registro/registro.component";
import {BusquedaComponent} from "./components/busqueda/busqueda.component"; [BusquedaComponent]
import {EstacionComponent} from "./components/estacion/estacion.component";
import {FavoritosComponent} from "./components/favoritos/favoritos.component";
import {InfoPlantaComponent} from "./components/info-planta/info-planta.component";
import {MisCultivosComponent} from "./components/mis-cultivos/mis-cultivos.component";


const appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'planta', component: InfoPlantaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'busqueda', component: BusquedaComponent },
    { path: 'estacion', component: EstacionComponent },
    { path: 'favoritos', component: FavoritosComponent },
    { path: 'mis-cultivos', component: MisCultivosComponent },
    { path: '**', component: HomeComponent}
  ];





export const routing = RouterModule.forRoot(appRoutes);
