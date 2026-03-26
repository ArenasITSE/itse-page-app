/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Protecion_civilComponent } from './protecion_civil.component';

describe('Protecion_civilComponent', () => {
  let component: Protecion_civilComponent;
  let fixture: ComponentFixture<Protecion_civilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Protecion_civilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Protecion_civilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
