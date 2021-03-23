import { Component } from '@angular/core';
import { ContactServiceService } from '../services/contact-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contName = "";
  contNumber = ""
  contacts: any = [];


  constructor(public contactService: ContactServiceService, public alertCtrl: AlertController) { }

  async ngOnInit() {
    this.contactService.getData().then(data => {
        this.contacts = data;
    });
  }

  saveC() {
    this.contactService.saveContact({name: this.contName, number: this.contNumber}).then(data => {
      this.contacts = data;
      this.clearField()
    });
  }

  clearField() {
    this.contName = "";
    this.contNumber = "";
  }

  async showConfirm(cont) {  
    const confirm = await this.alertCtrl.create({  
      header: 'Confirm!',  
      message: 'Confrim to delete?',  
      buttons: [  
        {  
          text: 'Cancel',  
          role: 'cancel',  
          handler: () => {  
            console.log('Confirm Cancel');  
          }  
        },  
        {  
          text: 'YES',  
          handler: () => {  
            console.log('Confirm Okay.'); 
            let index = this.contacts.indexOf(cont);
    if(index > -1){
      this.contacts.splice(index, 1);
    } 
          }  
        }  
      ]  
    });  
    await confirm.present();  
  }

}
