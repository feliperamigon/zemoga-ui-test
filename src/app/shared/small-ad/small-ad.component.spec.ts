import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallAdComponent } from './small-ad.component';

describe('SmallAdComponent', () => {
  let component: SmallAdComponent;
  let fixture: ComponentFixture<SmallAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
