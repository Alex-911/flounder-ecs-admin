import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single-uploader',
  templateUrl: './single-uploader.component.html',
  styleUrls: ['./single-uploader.component.scss'],
})
export class SingleUploaderComponent implements OnInit {
  files: File[] = [];

  @Input() product!: string;
  @Output() image = new EventEmitter();

  public url!: string;

  constructor() {}

  ngOnInit(): void {}

  onDrop(files: FileList) {
    for (let index = 0; index < files.length; index++) {
      this.files.push(files.item(index)!);
    }
  }

  confirmSubmition() {
    this.image.emit(this.url);
  }
}
