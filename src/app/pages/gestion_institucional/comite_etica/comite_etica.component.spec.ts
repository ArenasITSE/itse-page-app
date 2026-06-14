import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comite_eticaComponent } from './comite_etica.component';

describe('Comite_eticaComponent', () => {

  let component: Comite_eticaComponent;
  let fixture: ComponentFixture<Comite_eticaComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [Comite_eticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comite_eticaComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});