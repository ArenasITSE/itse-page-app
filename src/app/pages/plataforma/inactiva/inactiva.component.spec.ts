/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InactivaComponent } from './inactiva.component';

describe('InactivaComponent', () => {
  let component: InactivaComponent;
  let fixture: ComponentFixture<InactivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
