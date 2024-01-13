import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  abmDesc =
    '我是哲瑋，剛從大學畢業，對未來還不是這麼確定。 <br />在大學所學的專業包含通訊以及電腦相關，自己的興趣比較偏向於程式這一塊，所以在大四時參與了實習計畫。<br />目前所接觸到的部分大多為前端框架，對於將設計的樣板刻畫出來的過程滿有成就感的，雖然大多是在刻劃時的挫折感。<br />希望在未來能夠更得心應手，並且著手學習其他領域的知識，不要將自己侷限在前端。<br />';
  graduate = '2023年畢業於國立高雄科技大學 <br /> -電腦與通訊工程系-';
  work = '2022/9 進入 GLSoft 實習 <br / >2023/7 開始兼職擔任前端工程師';
  skill = 'HTML、CSS、JS <br/> 大學畢業專題使用過SwiftUI';
  constructor() {}

  ngOnInit(): void {}
}
