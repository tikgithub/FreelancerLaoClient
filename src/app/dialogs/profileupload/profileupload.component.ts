import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-profileupload',
  templateUrl: './profileupload.component.html',
  styleUrls: ['./profileupload.component.css']
})
export class ProfileuploadComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(private userApi: UserapiService) { }

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

  onSubmitProfile() {
    if (this.croppedImage != "") {
      let base64Image: string = "";
      base64Image = this.croppedImage;
      this.userApi.uploadProfile(base64Image).subscribe(result => {
        console.log(result);
      }, error => {
        console.log(error);
      });
    }
  }

}
