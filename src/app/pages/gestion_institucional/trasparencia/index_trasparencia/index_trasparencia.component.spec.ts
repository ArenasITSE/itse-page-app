import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IndexTransparenciaComponent } from './index_trasparencia.component';

describe('IndexTransparenciaComponent', () => {

  let component: IndexTransparenciaComponent;
  let fixture: ComponentFixture<IndexTransparenciaComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [IndexTransparenciaComponent]
    })
    .compileComponents();

  }));

  beforeEach(() => {

    fixture =
      TestBed.createComponent(IndexTransparenciaComponent);

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

});