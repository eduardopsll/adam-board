import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { DialogActionEnum } from "src/app/enums";
import { ImagesService } from "src/app/services";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent {
  public dialogActionEnum = DialogActionEnum;
  public imagesToDownload = [];
  public numImagesDownloaded = 0;
  public loadingValue = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private imagesService: ImagesService
  ) {}

  public download() {
    this.imagesService.download().subscribe(
      (counter) => {
        this.loadingValue = counter;
      },
      (error) => console.error(error),
      () => {
        of("Close dialog")
          .pipe(delay(1000))
          .subscribe(() => this.dialogRef.close());
      }
    );
  }

  onClick(): void {
    this.dialogRef.close();
  }
}
