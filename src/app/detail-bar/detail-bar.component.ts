import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-detail-bar',
  templateUrl: './detail-bar.component.html',
  styleUrls: ['./detail-bar.component.scss'],
})
export class DetailBarComponent implements OnInit {
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
  tabClick(name: string) {
    this.detail.find((item: { active: boolean; name: string }) => {
      item.active = name === item.name;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
