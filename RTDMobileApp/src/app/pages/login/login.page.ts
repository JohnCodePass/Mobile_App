import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showMe: boolean = true;
  fieldTextType: boolean = true;
  constructor(private router: Router) { }
  ngOnInit() {
  }
  hideComponent() {
    this.showMe = !this.showMe;
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
