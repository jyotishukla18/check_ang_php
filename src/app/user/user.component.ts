import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any;
  //users:User[] = [];
  constructor(private _usrService:UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this._usrService.getUsers()
    .subscribe(abc=>{
      this.users = abc.json();
      this.users = Array.of(this.users);
    })
  }

  deleteUser(id,name){
      if(confirm("Are you sure you want to delete user "+name)) {
            this._usrService.deleteSerUsers(id)
            .subscribe(()=>{
              this.getUsers();
            });
      }
  }

}
