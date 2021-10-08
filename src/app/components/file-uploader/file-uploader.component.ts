import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
  fileToUpload: File = null;
  authToken = null;
  authSub: Subscription;
  errorMessage: string;
  isLoading = false;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }

  handleFileInput(files: FileList) {
    console.log('handleFileInput', files.item(0));
    if (files.item(0).type !== 'video/mp4') {
      this.errorMessage = "Wrong file type";
      return;
    }
    this.isLoading = true;
    this.handleFileUpload(files.item(0));
  }

  upload (file, data) {
    console.log('Uploading started');
    var fd = new FormData();
    for (var key in data.fields) {
        if (data.fields.hasOwnProperty(key)) {
            var value = data.fields[key];
            fd.append(key, value);
        }
    }
    fd.append('acl', 'private');
    fd.append('file', file);

    console.log('URL:', data.url);
    fetch(data.url, {
        method: 'post',
        body: fd,
        headers: {
            'Authorization': ''
        }
    }).then(response => {
        console.log('Uploaded Finished');
        this.isLoading = false;
    }).catch(error => {
        console.log('Failed to upload', error);
        this.isLoading = false;
    })
  }
  handleFileUpload(file) {
    var requestDocumentUrl = env.awsService
        + '/s3-upload-link?filename=' + encodeURI(file.name) + '&filetype=' + encodeURI(file.type);

      this.authSub = this.authService.idTokenClaims$.subscribe((claims) => {
        this.authToken = claims.__raw;

        console.log("this.authToken",this.authToken);

        fetch(requestDocumentUrl, {
          headers: {
              'Authorization': 'Bearer ' + this.authToken
          }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Before Upload', data);
            this.upload(file, data);
        }).catch(error => {
          this.isLoading = false;
          console.log('ERROR FAIL:', error);
        });

      });
  }

}
