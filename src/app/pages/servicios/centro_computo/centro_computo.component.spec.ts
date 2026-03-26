/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Centro_computoComponent } from './centro_computo.component';

describe('Centro_computoComponent', () => {
  let component: Centro_computoComponent;
  let fixture: ComponentFixture<Centro_computoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Centro_computoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Centro_computoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
