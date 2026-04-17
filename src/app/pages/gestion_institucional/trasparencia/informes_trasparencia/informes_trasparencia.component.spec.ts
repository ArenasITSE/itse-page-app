/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Informes_trasparenciaComponent } from './informes_trasparencia.component';

describe('Informes_trasparenciaComponent', () => {
  let component: Informes_trasparenciaComponent;
  let fixture: ComponentFixture<Informes_trasparenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Informes_trasparenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Informes_trasparenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
