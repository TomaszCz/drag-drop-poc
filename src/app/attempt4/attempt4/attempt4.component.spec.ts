import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attempt4Component } from './attempt4.component';

describe('Attempt4Component', () => {
  let component: Attempt4Component;
  let fixture: ComponentFixture<Attempt4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Attempt4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Attempt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
