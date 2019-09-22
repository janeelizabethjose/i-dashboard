import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrsPage } from './otrs.page';

describe('OtrsPage', () => {
  let component: OtrsPage;
  let fixture: ComponentFixture<OtrsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtrsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
