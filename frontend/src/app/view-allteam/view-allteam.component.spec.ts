import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllteamComponent } from './view-allteam.component';

describe('ViewAllteamComponent', () => {
  let component: ViewAllteamComponent;
  let fixture: ComponentFixture<ViewAllteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
