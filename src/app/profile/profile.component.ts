import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  mugShot = '../resume-page/assets/img/mugShot.jpg';
  constructor() {}

  ngOnInit(): void {}
}
