import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contralorias_socialesComponent } from './contralorias_sociales.component';

describe('Contralorias_socialesComponent', () => {

  let component: Contralorias_socialesComponent;
  let fixture: ComponentFixture<Contralorias_socialesComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [Contralorias_socialesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      Contralorias_socialesComponent
    );

    component = fixture.componentInstance;

    fixture.detectChanges();

  });


  it('should create', () => {

    expect(component).toBeTruthy();

  });


  it('debe iniciar mostrando CSU006', () => {

    expect(
      component.contraloriaSeleccionada
    ).toBe('ppu006');

  });


  it('debe tener dos contralorías', () => {

    expect(
      component.contralorias.length
    ).toBe(2);

  });


  it('debe cambiar a CS_S247_PRODEP', () => {

    component.seleccionarContraloria('s247');

    expect(
      component.contraloriaSeleccionada
    ).toBe('s247');

  });


  it('debe cambiar de pestaña', () => {

    component.seleccionarTab('documentos');

    expect(
      component.tabSeleccionada
    ).toBe('documentos');

  });


  it('debe obtener la contraloría seleccionada', () => {

    component.seleccionarContraloria('s247');

    expect(
      component.contraloriaActual.id
    ).toBe('s247');

  });


  it('debe reiniciar la pestaña al cambiar de contraloría', () => {

    component.seleccionarTab('quejas');

    component.seleccionarContraloria('s247');

    expect(
      component.tabSeleccionada
    ).toBe('prodep');

  });


  // =========================================================
  // COMPROBACIÓN DE DOCUMENTOS
  // =========================================================

  it('debe tener documentos en CSU006', () => {

    const csu006 = component.contralorias.find(
      contraloria => contraloria.id === 'ppu006'
    );

    const documentos = csu006?.pestanas.find(
      pestana => pestana.id === 'documentos'
    );

    expect(
      documentos?.secciones?.length
    ).toBeGreaterThan(0);

  });


  it('debe tener documentos en CS_S247_PRODEP', () => {

    const s247 = component.contralorias.find(
      contraloria => contraloria.id === 's247'
    );

    const documentos = s247?.pestanas.find(
      pestana => pestana.id === 'documentos'
    );

    expect(
      documentos?.secciones?.length
    ).toBeGreaterThan(0);

  });

});