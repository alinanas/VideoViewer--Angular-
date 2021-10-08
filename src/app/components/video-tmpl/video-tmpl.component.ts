import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-tmpl',
  templateUrl: './video-tmpl.component.html',
  styleUrls: ['./video-tmpl.component.css']
})
export class VideoTmplComponent implements OnInit {
  @Input() item: {source: string, transcoding: boolean};

  constructor() { }

  ngOnInit(): void {
  }

}
