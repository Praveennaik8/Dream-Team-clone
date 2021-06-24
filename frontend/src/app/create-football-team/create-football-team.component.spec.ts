import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFootballTeamComponent } from './create-football-team.component';

describe('CreateFootballTeamComponent', () => {
  let component: CreateFootballTeamComponent;
  let fixture: ComponentFixture<CreateFootballTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFootballTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFootballTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
