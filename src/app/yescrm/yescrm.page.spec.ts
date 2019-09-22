import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YescrmPage } from './yescrm.page';

describe('YescrmPage', () => {
  let component: YescrmPage;
  let fixture: ComponentFixture<YescrmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YescrmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YescrmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
