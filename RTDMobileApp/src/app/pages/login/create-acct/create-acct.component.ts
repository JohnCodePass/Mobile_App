import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/interfaces/iuser';
import { AddService } from 'src/app/services/Add/add.service';


@Component({
  selector: 'app-create-acct',
  templateUrl: './create-acct.component.html',
  styleUrls: ['./create-acct.component.scss'],
})
export class CreateAcctComponent implements OnInit {

  sheetArr: any = [];
  
  constructor(private aService: AddService,
    private router: Router) { }
    
    ngOnInit(): void { }
    
  goToLoginPage() {
    this.router.navigateByUrl('login');
    
  }
  goToAdminPage() {
    this.router.navigateByUrl('AdminAcct');
    
  }
  
  showPW: boolean = true;
  fieldTextTypePW: boolean = true;
  
  hideComponentPW() {
    this.showPW = !this.showPW;
  }
  toggleFieldTextTypePW() {
    this.fieldTextTypePW = !this.fieldTextTypePW;
  }


  addUser(username, email, password, confirmPassword) {
    if(password == confirmPassword){
      const UserOBJ: Iuser = {
        id: 0,
        username: username,
        email: email,
        password: password
      }
        this.aService.addUser(UserOBJ).then(
          (res: any) => {
            console.log(res);
          }
        )
    }
    else{
      alert('Passwords do not match!');
    }
    console.log(username)
  }


}
