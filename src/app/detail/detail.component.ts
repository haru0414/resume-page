import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  detail: any = [];
  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.http
      .get('assets/json/detail.json')
      .subscribe((res) => {
        this.detail = res;
      });
  }
  ngOnInit(): void {}
  isMobileDevice() {
    var mobileDevice: string[] = [
      'Android',
      'webOS',
      'iPhone',
      'iPad',
      'iPod',
      'BlackBerry',
      'Windows Phone',
    ];
    var isMobileDevice = false;
    for (var i = 0; i < mobileDevice.length; i++) {
      if (navigator.userAgent.match(mobileDevice[i])) {
        isMobileDevice = true;
      }
    }
    return isMobileDevice;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
