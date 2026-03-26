/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Manual_lineComponent } from './manual_line.component';

describe('Manual_lineComponent', () => {
  let component: Manual_lineComponent;
  let fixture: ComponentFixture<Manual_lineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Manual_lineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Manual_lineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
