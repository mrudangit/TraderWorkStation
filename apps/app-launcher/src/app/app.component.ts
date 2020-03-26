import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var fin: any;

@Component({
  selector: 'trader-desktop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app-launcher';
  private setUserNameInterval: number;


  constructor(private httpClient: HttpClient) {

    this.setUserNameInterval = setInterval(() => {
      this.setAppLogUser().then(() => {
        console.log('Successfully Set AppUser Name');
        clearInterval(this.setUserNameInterval);
      }).catch(err => {
        console.log('error Setting User Name trying again ', err);
      });
    },1000);


  }
  uploadLogs($event: MouseEvent) {
    console.log('Upload Logs');
    this.sendLog().then(info => {
      console.log(info.logId)
    }).catch(err => {
      console.log(err)});

  }

  ngOnInit(): void {
  }


  async  sendLog() {
    const app = await fin.Application.getCurrent();
    return await app.sendApplicationLog();
  }


  async  setAppLogUser() {
    const app = await fin.Application.getCurrent();
    return await app.setAppLogUsername('MrudangMajmudar');
  }

  getPlatform($event: MouseEvent) {
    const platform = fin.Platform.getCurrentSync();

    console.log('Platform = ', platform);
  }

  async getExternalWindows($event: MouseEvent) {
    const externalWindows = await fin.System.getAllExternalWindows();

    console.log('External Windows : ', externalWindows);

  }

  windowMinimize($event: MouseEvent) {
    fin.me.minimize().catch(console.error);
  }

  windowRestore($event: MouseEvent) {
    this.maxOrRestore().catch(console.error)
  }

  windowClose($event: MouseEvent) {
    fin.me.close().catch(console.error)
  }

  async maxOrRestore() {
    if (await fin.me.getState() === "normal") {
      return await fin.me.maximize();
    }

    return fin.me.restore();
  }
}
