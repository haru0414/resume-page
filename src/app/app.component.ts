import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume-page';
  tabList = [
    {
      title: 'Me',
      name: 'abmDesc',
      active: true,
      // imgPath: 'https://picsum.photos/400/400?pepple=10',
      desc: '我是哲瑋，2023年剛從大學畢業，於2024年1月服完兵役，<br / >對未來還不是這麼確定但同時充滿熱誠及動力。 <br />大學的專業包含通訊以及資工，自己的興趣偏向於程式這一塊。<br />大四時選擇參與了校外實習，目前接觸到的部分為前端框架，<br / >運用所學將設計的網頁用程式刻畫的過程讓我有很大的成就感，<br / >雖然不免俗會遇到刻劃時的挫折感。<br />希望在未來能夠更得心應手，並且著手學習其他領域的知識，<br / >不要將自己侷限在前端。<br />',
    },
    {
      title: 'Graduate',
      name: 'graduate',
      active: false,
      // imgPath: 'https://picsum.photos/400/400?pepple=20',
      desc: '2023年畢業於國立高雄科技大學 <br /> -電腦與通訊工程系-',
    },
    {
      title: 'Work',
      name: 'work',
      active: false,
      // imgPath: 'https://picsum.photos/400/400?pepple=20',
      desc: '2022/9 進入 GLSoft 實習 <br / >2023/7 開始兼職擔任前端工程師',
    },
    {
      title: 'Skill',
      name: 'skill',
      active: false,
      // imgPath: 'https://picsum.photos/400/400?pepple=30',
      desc: 'HTML、SCSS、JS <br/> 畢業專題使用SwiftUI',
    },
    {
      title: 'Certificate',
      name: 'certificate',
      active: false,
      // imgPath: 'https://picsum.photos/400/400?pepple=40',
      desc: '電子類&nbsp;:&nbsp;乙級數位電子技術士、丙級工業電子技術士<br/> 職訓局&nbsp;:&nbsp;乙級電腦硬體裝修技術士、丙級電腦硬體裝修技術士',
    },
    {
      title: 'Merit',
      name: 'merit',
      active: false,
      // imgPath: 'https://picsum.photos/400/400?pepple=50',
      desc: '2022年電腦與通訊工程系院專題競賽-資通訊組-特優<br/>2022年電腦與通訊工程系專題競賽-第二名',
    },
  ];
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
  tabClick(name: string) {
    this.tabList.find((item) => {
      item.active = name === item.name;
    });
  }
}
