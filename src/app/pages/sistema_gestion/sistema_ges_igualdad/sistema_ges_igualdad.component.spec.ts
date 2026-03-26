/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sistema_ges_igualdadComponent } from './sistema_ges_igualdad.component';

describe('Sistema_ges_igualdadComponent', () => {
  let component: Sistema_ges_igualdadComponent;
  let fixture: ComponentFixture<Sistema_ges_igualdadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sistema_ges_igualdadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sistema_ges_igualdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
