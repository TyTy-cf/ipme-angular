import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  /**
   * @param end
   * @param start number by default is 0
   * @return number the generated number
   */
  getRangeRandom(end: number, start: number = 0): number {
    return Math.floor(Math.random() * (end - start + 1)) + start;
  }

}
