import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-acct',
  templateUrl: './create-acct.component.html',
  styleUrls: ['./create-acct.component.scss'],
})
export class CreateAcctComponent implements OnInit {

  showMe: boolean = true;
  fieldTextType: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() { }
  goToLoginPage() {
    this.router.navigateByUrl('login');

  }
  goToAdminPage() {
    this.router.navigateByUrl('AdminAcct');

  }

  hideComponent() {
    this.showMe = !this.showMe;
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
