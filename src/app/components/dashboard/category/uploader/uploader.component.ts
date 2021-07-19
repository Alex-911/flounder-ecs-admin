import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
})
export class UploaderComponent implements OnInit {
  files: File[] = [];

  @Input() categoryId!: string;
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
