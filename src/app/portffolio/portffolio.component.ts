import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portffolio',
  templateUrl: './portffolio.component.html',
  styleUrls: ['./portffolio.component.scss'],
})
export class PortffolioComponent implements OnInit {
  portfolio = [
    { title: '選擇訓練部位畫面' },
    { title: '部位細分動作畫面' },
    { title: '動作示範過場畫面' },
    { title: '偵測人體畫面' },
    { title: '判斷計次畫面' },
    { title: '動作完成畫面' },
    { title: '達成確認畫面' },
    { title: '部位皆已完成畫面' },
  ];
  // swiperConfig: SwiperOptions = {
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   grabCursor: true,
  //   pagination: {
  //     el: '.portffolio-swiper .swiper-pagination',
  //     clickable: true,
  //   },
  // };

  constructor() {}

  ngOnInit(): void {}
}
