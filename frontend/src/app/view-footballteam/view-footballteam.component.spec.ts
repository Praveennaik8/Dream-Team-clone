import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFootballteamComponent } from './view-footballteam.component';

describe('ViewFootballteamComponent', () => {
  let component: ViewFootballteamComponent;
  let fixture: ComponentFixture<ViewFootballteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFootballteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFootballteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
