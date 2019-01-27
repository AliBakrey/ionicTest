import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { UserProvider } from '../../../providers/user/user';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MyRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-requests',
  templateUrl: 'my-requests.html',
})
export class MyRequestsPage {

  sand_id: any;
  requests : any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    public UserProvider:UserProvider,
    private storage: Storage,
  ) {

  }

  getSandRequests(){
    this.storage.get('sand_id').then((val) =>{
      this.sand_id = val;
        this.http.get(this.UserProvider.get_sand_requests+this.sand_id)
          .subscribe(
            data =>{
              this.requests = data ;
              console.log(data);
          });
    });
  }

  delete(id){
    this.http.post(this.UserProvider.delete_sand_request,{
      "request_id":id
    })
      .subscribe(
        data =>{
          console.log(data);
          this.navCtrl.setRoot(this.navCtrl.getActive().component);
      });
  }

  ionViewDidLoad() {
    this.getSandRequests();
    console.log('ionViewDidLoad MyRequestsPage');
  }

}
