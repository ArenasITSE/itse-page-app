/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Comite_eticaComponent } from './comite_etica.component';

describe('Comite_eticaComponent', () => {
  let component: Comite_eticaComponent;
  let fixture: ComponentFixture<Comite_eticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comite_eticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comite_eticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
