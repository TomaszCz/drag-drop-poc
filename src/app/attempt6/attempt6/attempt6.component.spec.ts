import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attempt6Component } from './attempt6.component';

describe('Attempt6Component', () => {
  let component: Attempt6Component;
  let fixture: ComponentFixture<Attempt6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Attempt6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Attempt6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
