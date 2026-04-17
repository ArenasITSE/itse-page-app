/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Trasparencia_institucionalComponent } from './trasparencia_institucional.component';

describe('Trasparencia_institucionalComponent', () => {
  let component: Trasparencia_institucionalComponent;
  let fixture: ComponentFixture<Trasparencia_institucionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trasparencia_institucionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trasparencia_institucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
