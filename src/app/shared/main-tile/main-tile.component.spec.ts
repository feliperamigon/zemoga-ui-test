import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTileComponent } from './main-tile.component';

describe('MainTileComponent', () => {
  let component: MainTileComponent;
  let fixture: ComponentFixture<MainTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
