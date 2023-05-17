import { RouterModule } from '@angular/router';

//aquí se definen las rutas de cada componente
import { HomeComponent } from './components/home/home.component';


const appRoutes = [
    { path: '', component: HomeComponent }
];


export const routing = RouterModule.forRoot(appRoutes);