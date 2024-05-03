import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'sessionApp';

  constructor(private localstore: LocalStorageService){}

  // save item in local storage
  saveLocalStorage(){
    this.localstore.setItem("myKey", "Welcome to SessionApp");
  }

  //retrieve item from local storage
  retrieveFromLocalStore(){
    const value = this.localstore.getItem("myKey")
    console.log(value)
  }

  saveUser(){
    this.localstore.saveData("userId", "adminUser")
  }
  getUserId(){
    console.log(this.localstore.getData("userId"))
  }
  
  

}
