import { RouterModule } from '@angular/router';

//aquí se definen las rutas de cada componente
import { HomeComponent } from './components/home/home.component';
import { InfoPlantaComponent } from './components/info-planta/info-planta.component';


const appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'planta', component: InfoPlantaComponent },

];


export const routing = RouterModule.forRoot(appRoutes);