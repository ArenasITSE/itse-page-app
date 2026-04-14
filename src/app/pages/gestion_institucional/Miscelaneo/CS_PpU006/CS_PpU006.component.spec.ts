/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CS_PpU006Component } from './CS_PpU006.component';

describe('CS_PpU006Component', () => {
  let component: CS_PpU006Component;
  let fixture: ComponentFixture<CS_PpU006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CS_PpU006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CS_PpU006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
