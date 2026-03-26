import { Routes } from '@angular/router';

// 🔹 IMPORTA TODOS TUS COMPONENTES
import { Contador_pubComponent } from './pages/programas_educativos/contador_pub/contador_pub.component';
import { Ing_animacionComponent } from './pages/programas_educativos/ing_animacion/ing_animacion.component';
import { Ing_energias_renoComponent } from './pages/programas_educativos/ing_energias_reno/ing_energias_reno.component';
import { Ing_ferroComponent } from './pages/programas_educativos/ing_ferro/ing_ferro.component';
import { Ing_iaComponent } from './pages/programas_educativos/ing_ia/ing_ia.component';
import { Ing_industrias_aliComponent } from './pages/programas_educativos/ing_industrias_ali/ing_industrias_ali.component';
import { Ing_iscComponent } from './pages/programas_educativos/ing_isc/ing_isc.component';
import { Ing_sc_virtualComponent } from './pages/programas_educativos/ing_sc_virtual/ing_sc_virtual.component';
import { Lic_adminComponent } from './pages/programas_educativos/lic_admin/lic_admin.component';
import { Lic_admin_mixtaComponent } from './pages/programas_educativos/lic_admin_mixta/lic_admin_mixta.component';
import { Lic_gastroComponent } from './pages/programas_educativos/lic_gastro/lic_gastro.component';
import { Lic_turismoComponent } from './pages/programas_educativos/lic_turismo/lic_turismo.component';
import { Master_economiaComponent } from './pages/programas_educativos/master_economia/master_economia.component';
import { Nav_barComponent } from './pages/nav_bar/nav_bar.component';

import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [

  // 🔥 RUTA INICIAL
  { path: '', redirectTo: 'programas-educativos/contador-publico', pathMatch: 'full' },


  {
    path: 'programas-educativos',
    children: [
      { path: 'contador-publico', component: Contador_pubComponent },
      { path: 'ing-animacion', component: Ing_animacionComponent },
      { path: 'ing-energias-renovables', component: Ing_energias_renoComponent },
      { path: 'ing-ferro', component: Ing_ferroComponent },
      { path: 'ing-ia', component: Ing_iaComponent },
      { path: 'ing-industrias-alianza', component: Ing_industrias_aliComponent },
      { path: 'ing-isc', component: Ing_iscComponent },
      { path: 'ing-sc-virtual', component: Ing_sc_virtualComponent },
      { path: 'lic-admin', component: Lic_adminComponent },
      { path: 'lic-admin-mixta', component: Lic_admin_mixtaComponent },
      { path: 'lic-gastro', component: Lic_gastroComponent },
      { path: 'lic-turismo', component: Lic_turismoComponent },
      { path: 'master-economia', component: Master_economiaComponent }
    ]
  },

  // 📌 NAVBAR
  { path: 'nav-bar', component: Nav_barComponent },

  // ❌ 
  { path: '**', redirectTo: '' }

];