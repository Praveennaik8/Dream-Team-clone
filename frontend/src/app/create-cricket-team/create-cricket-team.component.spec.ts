import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCricketTeamComponent } from './create-cricket-team.component';

describe('CreateCricketTeamComponent', () => {
  let component: CreateCricketTeamComponent;
  let fixture: ComponentFixture<CreateCricketTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCricketTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCricketTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
