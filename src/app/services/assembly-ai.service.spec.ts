import { TestBed } from '@angular/core/testing';

import { AssemblyAiService } from '../services/assembly-ai.service';

describe('AssemblyAiService', () => {
  let service: AssemblyAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssemblyAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
