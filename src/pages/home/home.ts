import { Component} from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { JsonControllerProvider } from '../../providers/json-controller/json-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  title: string ="";
  link: string ="";
  mData: {
    title: "Page",
    link: "./assets/imgs/logo.png"
  }
  constructor(
    public mAlertController: AlertController,
    public mJsonControllerProvider: JsonControllerProvider,
    public navCtrl: NavController) {
    for (let index = 0; index < 10; index++) {
        this.list.push("item"+index);      
    }
    this.title = "Home Page";
    this.mData = {
      title: "Page",
      link: "./assets/imgs/logo.png"
    }
  }
  list = [];
  ionViewDidLoad(){
  }

  addTitle(){
    let alert = this.mAlertController.create({
      inputs:[{
        placeholder:"Nhap title",
        value: "title"
      }],
      buttons:[{
        text: "ok",
        handler: data=>{
          console.log(data);
          
          this.title = data[0];
        }
      }]
    })
    alert.present();
  }
 


}
