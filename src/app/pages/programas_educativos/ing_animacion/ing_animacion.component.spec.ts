/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ing_animacionComponent } from './ing_animacion.component';

describe('Ing_animacionComponent', () => {
  let component: Ing_animacionComponent;
  let fixture: ComponentFixture<Ing_animacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ing_animacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ing_animacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
