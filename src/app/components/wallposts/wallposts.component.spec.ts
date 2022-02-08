import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpostsComponent } from './wallposts.component';

describe('WallpostsComponent', () => {
  let component: WallpostsComponent;
  let fixture: ComponentFixture<WallpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallpostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
