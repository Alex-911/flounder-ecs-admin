import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multi-uploader',
  templateUrl: './multi-uploader.component.html',
  styleUrls: ['./multi-uploader.component.scss'],
})
export class MultiUploaderComponent implements OnInit {
  files: File[] = [];

  @Input() product!: string;

  @Output() imageUrls = new EventEmitter();

  public images: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  onDrop(files: FileList) {
    for (let index = 0; index < files.length; index++) {
      this.files.push(files.item(index)!);
    }
  }

  confirmSubmition() {
    if (this.images.length >= 1) {
      this.imageUrls.emit(this.images);
    }
  }

  add(e: string) {
    this.images.push(e);
  }
}
