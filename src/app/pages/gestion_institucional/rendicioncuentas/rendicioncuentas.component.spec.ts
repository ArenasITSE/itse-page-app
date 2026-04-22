/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RendicioncuentasComponent } from './rendicioncuentas.component';

describe('RendicioncuentasComponent', () => {
  let component: RendicioncuentasComponent;
  let fixture: ComponentFixture<RendicioncuentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendicioncuentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendicioncuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
