import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sub-category-uploader',
  templateUrl: './sub-category-uploader.component.html',
  styleUrls: ['./sub-category-uploader.component.scss'],
})
export class SubCategoryUploaderComponent implements OnInit {
  files: File[] = [];

  @Input() mainCategoryId!: string;
  @Input() subCategoryId!: string;
  @Output() image = new EventEmitter();

  public url!: string;

  constructor() {}

  ngOnInit(): void {}

  onDrop(files: FileList | null) {
    for (let index = 0; index < files!.length; index++) {
      this.files.push(files!.item(index)!);
    }
  }

  confirmSubmition() {
    this.image.emit(this.url);
  }
}
