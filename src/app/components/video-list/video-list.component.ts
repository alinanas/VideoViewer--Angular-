import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  item$: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.item$ = db.list('videos').valueChanges();
    this.item$.subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
