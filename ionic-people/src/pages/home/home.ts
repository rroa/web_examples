import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { PeopleApiService } from '../../shared/people.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public HEROES: Array<any> = [
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 5, name: 'BatGirl' },
    { id: 3, name: 'Robin' },
    { id: 4, name: 'Flash' }
  ];

  public people: Array<any>;
  public loader : any;

  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController, 
    private api: PeopleApiService
    ) {
    this.presentLoadingDefault();
    this.api.getPeople(1500).subscribe(
      data => {
        // TODO: RR: Process the retrieved data
        this.people = data.results;
      },
      err => {
        // Uh Oh
        console.log('err', err);
      },
      () => {
        // TODO: RR: Add callback
        this.loader.dismiss();
        console.log('done');
      });
  }

  presentLoadingDefault() {
    this.loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loader.present();
  }
}
