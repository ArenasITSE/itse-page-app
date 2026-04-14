/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Contabilidad_institucionalComponent } from './contabilidad_institucional.component';

describe('Contabilidad_institucionalComponent', () => {
  let component: Contabilidad_institucionalComponent;
  let fixture: ComponentFixture<Contabilidad_institucionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contabilidad_institucionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contabilidad_institucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
