/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ing_sc_virtualComponent } from './ing_sc_virtual.component';

describe('Ing_sc_virtualComponent', () => {
  let component: Ing_sc_virtualComponent;
  let fixture: ComponentFixture<Ing_sc_virtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ing_sc_virtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ing_sc_virtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
