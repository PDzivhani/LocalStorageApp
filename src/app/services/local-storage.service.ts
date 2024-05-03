import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private keys = "12345"

  constructor() { }

  public saveData( keys: string, data: string): void {
    //send data and encrypt it
    localStorage.setItem(keys, this.encrypt(data));
  }

  // get data from local storage and decrypt it to plain text
  public getData(keys: string){
    let data = localStorage.getItem(keys)|| "";
    return this.decrypt(data)
  }

  // remove an item from local storage
  public removeData(keys: string){
    localStorage.removeItem(keys)
  }

  public clearData(){
    localStorage.clear()
  }


  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.keys).toString()
  }

  private decrypt(txtToDecrpyt: string): string{
    return CryptoJS.AES.decrypt(txtToDecrpyt, this.keys).toString(CryptoJS.enc.Utf8)
  }


  // Set item in localstorage
   setItem(key: string, value: any): void {
    localStorage.setItem(key, value)
    console.log(value)
   }

   // get a value from the local storage
   getItem(key: string) : string|null {
    return localStorage.getItem(key)

   }

   // remove one item from local storage
   removeItem(key : string): void {
    localStorage.removeItem(key)
   }

   //clear all items 
   clearAll(): void {
    localStorage.clear()
   }

}
