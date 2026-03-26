/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lic_admin_mixtaComponent } from './lic_admin_mixta.component';

describe('Lic_admin_mixtaComponent', () => {
  let component: Lic_admin_mixtaComponent;
  let fixture: ComponentFixture<Lic_admin_mixtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lic_admin_mixtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lic_admin_mixtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
