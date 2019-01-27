import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform} from 'ionic-angular';
import { UserProvider } from '../../../providers/user/user';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { TranslateService} from '@ngx-translate/core';
/**
 * Generated class for the VmsnodAddRforSandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vmsnod-add-rfor-sand',
  templateUrl: 'vmsnod-add-rfor-sand.html',
})
export class VmsnodAddRforSandPage {

  id:any;
  data : any;
  masnod_id : any;
  status : any;
  request_status:any;
  deetaaa : any;
  requsts : any [];
  request_id:any;
  request_date:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public translate : TranslateService,
    public http: HttpClient,
    public UserProvider:UserProvider,
    private storage: Storage
  ) {

  }

  showRequest(){
    this.http.get(this.UserProvider.get_one_request+this.request_id)  
              .subscribe(
                d => {
                  this.deetaaa = d;
                  console.log(this.deetaaa);
            //  login as msnood
            for(let i=0;i<this.deetaaa.length;i++){
              if( this.deetaaa[i].request_status == 'm'){
                this.deetaaa[i].url = '../../assets/imgs2/yellow.jpg' ;
                this.request_status = this.deetaaa[i].request_status;
              }else if(this.deetaaa[i].request_status == 'vm'){
                this.deetaaa[i].url = '../../assets/imgs2/green.jpg' ;
                this.request_status = this.deetaaa[i].request_status;
              }else{
                this.deetaaa[i].url = '../../assets/imgs2/yellow.jpg';
              }
            }
            
            for(let i=0;i<this.deetaaa.length;i++){
              if( this.deetaaa[i].category == 'monetary')
                this.deetaaa[i].url1 = '../../assets/imgs2/monetary.jpg' ;
              else if(this.deetaaa[i].category == 'materialistic')
                this.deetaaa[i].url1 = '../../assets/imgs2/material.jpg' ;
              else
                this.deetaaa[i].url1 = '../../assets/imgs2/other.jpg';
            }
            
            });
          
  }
  ionViewDidLoad() {
    
    this.request_id = this.navParams.get("id");
    this.showRequest();
    console.log(">>>>>>>>>"+this.request_id);
    console.log('ionViewDidLoad VmsnodAddRforSandPage');
  }

}
