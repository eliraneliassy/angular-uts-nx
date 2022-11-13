import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor(private logger: LoggerService) {}

  plus(a: number, b: number): number {
    const res = a + b;
    this.logger.log(`plus result is ${res}`);
    return res;
  }
}
