import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: []
})
export class CreateUserComponent implements OnInit {

  constructor(
    private _usrService:UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  model = new User();

  addUser(){
    console.log(this.model);
    this._usrService.addSerUsers(this.model).subscribe(()=>this.goBack());
  }
  goBack(){
    this.router.navigate(['/home']);
  }

  keyPress(event:any){
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
