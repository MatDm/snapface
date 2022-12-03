import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  ngOnInit(): void {

    this.faceSnaps = [
      {
        title: 'Haze',
        description: 'Last trip to the Black Forest',
        imageUrl: 'https://pixabay.com/get/gc52a99b39205acf58cc3f4147d1e626425d6273550168c170095afb4e4e08633583f7bf04c0f8bdbf8d749bf93dc4a1730d153e34846c549cb5cc4fcf1355948cdeef97104ae1fea73b6d198deab2ad3_1920.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Black Forest'
      },
      {
        title: 'Desert',
        description: 'Lonely house in the middle of nowhere',
        imageUrl: 'https://pixabay.com/get/gfa699cca0f94e5334127315717d33ec760d89adec5f0d01189f86541972932a1f300076d21b8986f10231795f8d29474e315e2562b61d2cc108fd834a2c0f85bf8873617b1f0028b541608dde2586a62_1920.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Nevada'
      },
      {
        title: 'Storm',
        description: 'Nice storm and scary beach',
        imageUrl: 'https://pixabay.com/get/geaa25afca34349673cd6e7547741ca0127d62bf18b53839953f8995a68b6376283cf48845531ae2153e9aca6eef837beeb9e1952a69498dff8a866415b04fae5c6224276e6b248cbc2dad27dfdc3e787_1920.jpg',
        createdDate: new Date(),
        snaps: 0
      }
    ];
  }
}


