/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CIIEComponent } from './CIIE.component';

describe('CIIEComponent', () => {
  let component: CIIEComponent;
  let fixture: ComponentFixture<CIIEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CIIEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CIIEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
