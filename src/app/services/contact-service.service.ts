import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Camera, Filesystem, Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})



export class ContactServiceService {

  DATA_STORAGE = 'data';
  constructor() { }

  saveContact(param: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getData().then(data => {
        let tempContact = [];
        for(let i = 0; i < data.length; i++) {
          tempContact.push(data[i]);
        }
        tempContact.push(param);
        Storage.set({key: this.DATA_STORAGE, value: JSON.stringify(tempContact)});
        resolve(tempContact);
      })
    });
  }



  public async getData() {
    const cont = await Storage.get({ key: this.DATA_STORAGE });
    return JSON.parse(cont.value) || [];
  }




}
