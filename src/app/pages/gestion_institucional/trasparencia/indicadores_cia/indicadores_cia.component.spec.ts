/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Indicadores_ciaComponent } from './indicadores_cia.component';

describe('Indicadores_ciaComponent', () => {
  let component: Indicadores_ciaComponent;
  let fixture: ComponentFixture<Indicadores_ciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Indicadores_ciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Indicadores_ciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
