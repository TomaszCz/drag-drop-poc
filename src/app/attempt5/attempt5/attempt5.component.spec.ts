import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attempt5Component } from './attempt5.component';

describe('Attempt5Component', () => {
  let component: Attempt5Component;
  let fixture: ComponentFixture<Attempt5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Attempt5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Attempt5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
