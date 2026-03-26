/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ing_iscComponent } from './ing_isc.component';

describe('Ing_iscComponent', () => {
  let component: Ing_iscComponent;
  let fixture: ComponentFixture<Ing_iscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ing_iscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ing_iscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
