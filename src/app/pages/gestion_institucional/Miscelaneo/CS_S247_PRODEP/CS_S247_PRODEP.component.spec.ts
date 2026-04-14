/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CS_S247_PRODEPComponent } from './CS_S247_PRODEP.component';

describe('CS_S247_PRODEPComponent', () => {
  let component: CS_S247_PRODEPComponent;
  let fixture: ComponentFixture<CS_S247_PRODEPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CS_S247_PRODEPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CS_S247_PRODEPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
