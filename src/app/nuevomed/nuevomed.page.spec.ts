import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevomedPage } from './nuevomed.page';

describe('NuevomedPage', () => {
  let component: NuevomedPage;
  let fixture: ComponentFixture<NuevomedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevomedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevomedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
