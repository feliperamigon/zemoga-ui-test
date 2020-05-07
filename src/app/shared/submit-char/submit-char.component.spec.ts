import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCharComponent } from './submit-char.component';

describe('SubmitCharComponent', () => {
  let component: SubmitCharComponent;
  let fixture: ComponentFixture<SubmitCharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitCharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
