import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUploaderComponent } from './single-uploader.component';

describe('SingleUploaderComponent', () => {
  let component: SingleUploaderComponent;
  let fixture: ComponentFixture<SingleUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
