/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Master_economiaComponent } from './master_economia.component';

describe('Master_economiaComponent', () => {
  let component: Master_economiaComponent;
  let fixture: ComponentFixture<Master_economiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Master_economiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Master_economiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
