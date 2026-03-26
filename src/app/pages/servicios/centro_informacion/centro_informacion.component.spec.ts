/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Centro_informacionComponent } from './centro_informacion.component';

describe('Centro_informacionComponent', () => {
  let component: Centro_informacionComponent;
  let fixture: ComponentFixture<Centro_informacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Centro_informacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Centro_informacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
