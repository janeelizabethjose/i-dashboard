import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraPage } from './jira.page';

describe('JiraPage', () => {
  let component: JiraPage;
  let fixture: ComponentFixture<JiraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
