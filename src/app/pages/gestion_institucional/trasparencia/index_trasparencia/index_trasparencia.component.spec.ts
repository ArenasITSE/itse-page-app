/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Index_trasparenciaComponent } from './index_trasparencia.component';

describe('Index_trasparenciaComponent', () => {
  let component: Index_trasparenciaComponent;
  let fixture: ComponentFixture<Index_trasparenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Index_trasparenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Index_trasparenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
