import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  constructor() {}

  busyRequestCount = 0;
  showCustomLoader = false;

  busy() {
    this.busyRequestCount++;
    this.showCustomLoader = true;
  }

  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.showCustomLoader = false;
    }
  }
}
