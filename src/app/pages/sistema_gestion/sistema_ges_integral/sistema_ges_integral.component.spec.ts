/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sistema_ges_integralComponent } from './sistema_ges_integral.component';

describe('Sistema_ges_integralComponent', () => {
  let component: Sistema_ges_integralComponent;
  let fixture: ComponentFixture<Sistema_ges_integralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sistema_ges_integralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sistema_ges_integralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
