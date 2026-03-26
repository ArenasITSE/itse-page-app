/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Contador_pubComponent } from './contador_pub.component';

describe('Contador_pubComponent', () => {
  let component: Contador_pubComponent;
  let fixture: ComponentFixture<Contador_pubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contador_pubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contador_pubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
