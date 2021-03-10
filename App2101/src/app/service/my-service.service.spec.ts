import { TestBed } from '@angular/core/testing';

import { MyServiceService } from './my-service.service';

describe('MyServiceService', () => {
  let service: MyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServiceService);
  });

  it('should be created', () => {
    const service: MyServiceService = TestBed.get(MyServiceService);
    expect(service).toBeTruthy();
  });
});
