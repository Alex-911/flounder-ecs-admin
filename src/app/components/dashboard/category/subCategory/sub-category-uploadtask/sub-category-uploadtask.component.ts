import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-sub-category-uploadtask',
  templateUrl: './sub-category-uploadtask.component.html',
  styleUrls: ['./sub-category-uploadtask.component.scss'],
})
export class SubCategoryUploadtaskComponent implements OnInit {
  @Input() file!: File;
  @Input() mainCategoryId!: string;
  @Input() subCategoryId!: string;

  private task!: AngularFireUploadTask;

  public percent!: Observable<number | undefined>;
  public snapshot!: Observable<any>;

  public downloadURL!: string;

  @Output() public fileUrl = new EventEmitter();

  public uploading: boolean = false;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {
    this.startUpload();
  }

  startUpload() {
    const path = `prod_category/${this.mainCategoryId}/${this.subCategoryId}/${this.subCategoryId}_${this.file.name}`;

    const ref = this.storage.ref(path);

    this.task = this.storage.upload(path, this.file);

    this.percent = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        this.fileUrl.emit(this.downloadURL);
      })
    );
    this.snapshot.subscribe(
      (val) => {
        this.uploading = true;
      },
      (err) => console.error(err),
      async () => {
        this.uploading = false;
      }
    );
  }
}
