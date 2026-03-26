/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Recursos_financierosComponent } from './recursos_financieros.component';

describe('Recursos_financierosComponent', () => {
  let component: Recursos_financierosComponent;
  let fixture: ComponentFixture<Recursos_financierosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recursos_financierosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Recursos_financierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
