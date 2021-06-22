import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';


@Injectable({
providedIn: 'root'
})
export class StorageService {
constructor() {}

// Store the value
async store(storageKey: string, value: any) {
  const encryptedValue = btoa(escape(JSON.stringify(value)));
  console.log(storageKey + " **************** " + value);
  await Storage.set({  key: storageKey,   value: encryptedValue  });
}

// Get the value
async get(storageKey: string) {
  const ret = await Storage.get({ key: storageKey });
  if(ret.value){
    return JSON.parse(unescape(atob(ret.value)));
  }else{
    return false;
  }

}

// remove perticuler items
async removeStorageItem(storageKey: string) {
   await Storage.remove({ key: storageKey });
}

// Clear storage
async clear() {
  await Storage.clear();
}

}