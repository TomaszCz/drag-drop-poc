import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attempt3Component } from './attempt3.component';

describe('Attempt3Component', () => {
  let component: Attempt3Component;
  let fixture: ComponentFixture<Attempt3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Attempt3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Attempt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
