/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lic_adminComponent } from './lic_admin.component';

describe('Lic_adminComponent', () => {
  let component: Lic_adminComponent;
  let fixture: ComponentFixture<Lic_adminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lic_adminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lic_adminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
