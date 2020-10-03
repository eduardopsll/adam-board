import { SwUpdate } from '@angular/service-worker';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class PromptUpdateService {
  private updates = undefined;
  constructor(updates: SwUpdate) {
      this.updates = updates;
  }

  public get() {
    this.updates.available.subscribe(event => {
        this.updates.activateUpdate().then((data) => console.log(data));
    });
  }
}