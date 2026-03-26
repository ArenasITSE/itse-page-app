/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Quejas_denunciasComponent } from './quejas_denuncias.component';

describe('Quejas_denunciasComponent', () => {
  let component: Quejas_denunciasComponent;
  let fixture: ComponentFixture<Quejas_denunciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quejas_denunciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quejas_denunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
