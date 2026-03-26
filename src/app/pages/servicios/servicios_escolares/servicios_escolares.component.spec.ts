/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Servicios_escolaresComponent } from './servicios_escolares.component';

describe('Servicios_escolaresComponent', () => {
  let component: Servicios_escolaresComponent;
  let fixture: ComponentFixture<Servicios_escolaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicios_escolaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicios_escolaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
