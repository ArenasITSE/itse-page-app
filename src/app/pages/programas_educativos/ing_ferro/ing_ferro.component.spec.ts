/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ing_ferroComponent } from './ing_ferro.component';

describe('Ing_ferroComponent', () => {
  let component: Ing_ferroComponent;
  let fixture: ComponentFixture<Ing_ferroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ing_ferroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ing_ferroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
