import { Injectable } from '@angular/core';
import { Iuser } from 'src/app/interfaces/iuser';
import { DataService } from '../Data/data.service';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private dService: DataService) { }

  addUser(userToAdd:Iuser)
  {
    return this.dService.post("auth/add", userToAdd).toPromise();
  }
}
