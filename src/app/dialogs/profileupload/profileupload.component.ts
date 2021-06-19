import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-profileupload',
  templateUrl: './profileupload.component.html',
  styleUrls: ['./profileupload.component.css']
})
export class ProfileuploadComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor() { }

  ngOnInit(): void {
  }


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

}
