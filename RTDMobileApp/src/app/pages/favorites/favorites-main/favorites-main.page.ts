import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites-main',
  templateUrl: './favorites-main.page.html',
  styleUrls: ['./favorites-main.page.scss'],
})
export class FavoritesMainPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  favorite = "1000 March Lane";
  iconName = "home";
  favBus = "40 Pacific Corridor: DTC - HTS";

  editMe(){
    // be able to edit the button text inside, maybe make it an input box?
    alert("my edit button has been clicked");
  }
  goToBus(){
    alert("Bus button has been pressed");
  }



}
