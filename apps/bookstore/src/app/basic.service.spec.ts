import { TestBed } from '@angular/core/testing';

import { BasicService } from './basic.service';
import { LoggerService } from './logger.service';

describe('BasicService', () => {
  let service: BasicService;
  let loggerService: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicService);
    loggerService = TestBed.inject(LoggerService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a + b', () => {
    jest.spyOn(loggerService, 'log');

    const result = service.plus(1, 3);

    expect(loggerService.log).toHaveBeenCalledTimes(1);

    expect(result).toEqual(4);
  })
});

// describe('BasicService', () => {
//   let service: BasicService;
//   let loggerService: LoggerService;
//   beforeEach(() => {
//     loggerService = new LoggerService();
//     service = new BasicService(loggerService);
//   });

//   it('should return a + b', () => {
//     jest.spyOn(loggerService, 'log');

//     const result = service.plus(1, 3);

//     expect(loggerService.log).toHaveBeenCalledTimes(1);

//     expect(result).toEqual(4);
//   })
// })
