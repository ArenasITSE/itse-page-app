/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SiacebComponent } from './siaceb.component';

describe('SiacebComponent', () => {
  let component: SiacebComponent;
  let fixture: ComponentFixture<SiacebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiacebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiacebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
