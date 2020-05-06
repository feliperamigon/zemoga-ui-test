import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallTileComponent } from './small-tile.component';

describe('SmallTileComponent', () => {
  let component: SmallTileComponent;
  let fixture: ComponentFixture<SmallTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
