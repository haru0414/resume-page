import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  abmDesc =
    '我是哲瑋，2023年剛從大學畢業，於2024年1月服完兵役，對未來還不是這麼確定但同時充滿熱誠及動力。 <br />大學的專業包含通訊以及資工，自己的興趣偏向於程式這一塊。<br />大四時選擇參與了校外實習，目前接觸到的部分為前端框架，運用所學將設計的網頁用程式刻畫出來的過程讓我有很大的成就感，雖然不免俗會遇到刻劃時的挫折感。<br />希望在未來能夠更得心應手，並且著手學習其他領域的知識，不要將自己侷限在前端。<br />';
  graduate = '2023年畢業於國立高雄科技大學 <br /> -電腦與通訊工程系-';
  work = '2022/9 進入 GLSoft 實習 <br / >2023/7 開始兼職擔任前端工程師';
  skill = 'HTML、CSS、JS <br/> 大學畢業專題使用過SwiftUI';
  constructor() {}

  ngOnInit(): void {}
}
