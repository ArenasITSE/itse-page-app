/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lic_gastroComponent } from './lic_gastro.component';

describe('Lic_gastroComponent', () => {
  let component: Lic_gastroComponent;
  let fixture: ComponentFixture<Lic_gastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lic_gastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lic_gastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
