/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Aviso_privacidadComponent } from './aviso_privacidad.component';

describe('Aviso_privacidadComponent', () => {
  let component: Aviso_privacidadComponent;
  let fixture: ComponentFixture<Aviso_privacidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aviso_privacidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aviso_privacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
