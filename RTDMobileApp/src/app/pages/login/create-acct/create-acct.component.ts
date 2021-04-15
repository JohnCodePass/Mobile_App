import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-acct',
  templateUrl: './create-acct.component.html',
  styleUrls: ['./create-acct.component.scss'],
})
export class CreateAcctComponent implements OnInit {

  showPW: boolean = true;
  fieldTextTypePW: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() { }
  goToLoginPage() {
    this.router.navigateByUrl('login');

  }
  goToAdminPage() {
    this.router.navigateByUrl('AdminAcct');

  }

  hideComponentPW() {
    this.showPW = !this.showPW;
  }
  toggleFieldTextTypePW() {
    this.fieldTextTypePW = !this.fieldTextTypePW;
  }
}
