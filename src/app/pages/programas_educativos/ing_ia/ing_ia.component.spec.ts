/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ing_iaComponent } from './ing_ia.component';

describe('Ing_iaComponent', () => {
  let component: Ing_iaComponent;
  let fixture: ComponentFixture<Ing_iaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ing_iaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ing_iaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
