import { Routes } from '@angular/router';

// componentes de programas educativos 
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
import { FooterComponent } from './pages/footer/footer.component';
import { Page_mantenimientoComponent } from './pages/page_mantenimiento/page_mantenimiento.component';

// componentes de Itsescarcega
 
import { ConvocatoriaComponent } from './pages/ITSESCARCEGA/convocatoria/convocatoria.component';
import { DirectorioComponent } from './pages/ITSESCARCEGA/directorio/directorio.component';
import { HistoriaComponent } from './pages/ITSESCARCEGA/historia/historia.component';
import { Manual_lineComponent } from './pages/ITSESCARCEGA/manual_line/manual_line.component';
import { NormativaComponent } from './pages/ITSESCARCEGA/normativa/normativa.component';
import { OrganigramaComponent } from './pages/ITSESCARCEGA/organigrama/organigrama.component';

//componentes plataforma
import { SiacebComponent } from './pages/plataforma/siaceb/siaceb.component';
import { Sistema_mantenimientoComponent } from './pages/plataforma/sistema_mantenimiento/sistema_mantenimiento.component';
import { TutoriasComponent } from './pages/plataforma/tutorias/tutorias.component';

// componentes servicios 

import { Centro_computoComponent } from './pages/servicios/centro_computo/centro_computo.component';
import { Centro_informacionComponent } from './pages/servicios/centro_informacion/centro_informacion.component';
import { Recursos_financierosComponent } from './pages/servicios/recursos_financieros/recursos_financieros.component';
import { Servicios_escolaresComponent } from './pages/servicios/servicios_escolares/servicios_escolares.component';

// compontes sistemas de gestion

import { BuzonComponent } from './pages/sistema_gestion/buzon/buzon.component';
import { Protecion_civilComponent } from './pages/sistema_gestion/protecion_civil/protecion_civil.component';
import { Quejas_denunciasComponent } from './pages/sistema_gestion/quejas_denuncias/quejas_denuncias.component';
import { Sistema_ges_igualdadComponent } from './pages/sistema_gestion/sistema_ges_igualdad/sistema_ges_igualdad.component';
import { Sistema_ges_integralComponent } from './pages/sistema_gestion/sistema_ges_integral/sistema_ges_integral.component';


// rutas gestion institucional MISCELANEO
import { ArchivoComponent } from './pages/gestion_institucional/Miscelaneo/archivo/archivo.component';
import { Contabilidad_institucionalComponent } from './pages/gestion_institucional/Miscelaneo/contabilidad_institucional/contabilidad_institucional.component';
import { CS_S247_PRODEPComponent } from './pages/gestion_institucional/Miscelaneo/CS_S247_PRODEP/CS_S247_PRODEP.component';
import { CS_PpU006Component } from './pages/gestion_institucional/Miscelaneo/CS_PpU006/CS_PpU006.component';
import { AccesibilidadComponent } from './pages/gestion_institucional/Miscelaneo/accesibilidad/accesibilidad.component';

// vinculacion
import { VinculacionComponent } from './pages/gestion_institucional/vinculacion/vinculacion.component';

export const routes: Routes = [


  { path: '', redirectTo: 'Inicio', pathMatch: 'full' },


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


  {
    path: 'ITSESCARCEGA',
    children: [
      { path: 'convocatoria', component: ConvocatoriaComponent },
      { path: 'directorio', component: DirectorioComponent },
      { path: 'historia', component: HistoriaComponent },
      { path: 'manual-line', component: Manual_lineComponent },
      { path: 'normativa', component: NormativaComponent },
      { path: 'organigrama', component: OrganigramaComponent }
    ]
  },

  {
    path: 'Plataforma',
    children: [
        {path: 'siaceb', component: SiacebComponent},
        {path: 'sistema-mantenimiento', component: Sistema_mantenimientoComponent},
        {path: 'tutorias', component: TutoriasComponent}

    ]
  },
    {
    path: 'Servicios',
    children: [
        {path: 'centro-computo', component: Centro_computoComponent},
        {path: 'centro-informacion', component: Centro_informacionComponent},
        {path: 'recursos-financieros', component: Recursos_financierosComponent},
        {path: 'servicios-escolares', component: Servicios_escolaresComponent}

    ]
  },
    {
    path: 'sistema-gestion',
    children: [
        {path: 'buzon', component: BuzonComponent},
        {path: 'proteccion-civil', component: Protecion_civilComponent},
        {path: 'quejas-denuncias', component: Quejas_denunciasComponent},
        {path: 'sistema-ges-igualdad', component: Sistema_ges_igualdadComponent},
        {path: 'sistema-ges-integral', component: Sistema_ges_integralComponent}

    ]
  },

  {
    path: 'gestion_institucional',
    children: [
      {path: 'archivo', component: ArchivoComponent},
      {path: 'contabilidad-institucional', component: Contabilidad_institucionalComponent},
      {path: 'cs-s247-prodep', component: CS_S247_PRODEPComponent},
      {path: 'cs-ppu006', component: CS_PpU006Component},
      {path: 'accesibilidad', component: AccesibilidadComponent},
      {path: 'vinculacion', component: VinculacionComponent}

    ]

  },

  { path: 'Inicio', component: HomeComponent },
  { path: 'nav-bar', component: Nav_barComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'mantenimiento', component: Page_mantenimientoComponent },
  

  { path: '**', redirectTo: 'mantenimiento' }

];