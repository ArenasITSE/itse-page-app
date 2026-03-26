/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lic_turismoComponent } from './lic_turismo.component';

describe('Lic_turismoComponent', () => {
  let component: Lic_turismoComponent;
  let fixture: ComponentFixture<Lic_turismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lic_turismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lic_turismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
