import { Injectable } from "@angular/core";
import { Observable, of, Subject, timer } from "rxjs";
import { delay, delayWhen, tap } from "rxjs/operators";
import { PromptUpdateService } from "src/app/services/prompt.service";

@Injectable({
  providedIn: "root",
})
export class ImagesService {
  private counter: number = 0;
  private counter$ = new Subject<number>();
  private images: string[] = [];
  private images$ = new Subject<string[]>();

  constructor(private promptService: PromptUpdateService) {}

  public set(_images: string[]): Observable<string[]> {
    this.images = _images;
    return this.images$;
  }

  public download() {
    this.images$.next(
      this.images.map((item) => `${item["categoryId"]}/${item["image"]}`)
    );
    this.promptService.get();
    return this.counter$;
  }

  public updateCounter() {
    this.counter++;
    let percentage = Math.round((this.counter * 100) / this.images.length);
    this.counter$.next(percentage);
    if (this.counter === this.images.length) {
      this.counter$.complete();
    }
  }
}
