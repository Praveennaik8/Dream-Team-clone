import { TestBed } from '@angular/core/testing';

import { GetTeams } from './get-teams.service';

describe('GetTeamsService', () => {
  let service: GetTeams;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTeams);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
