import { Component, OnInit,Input } from '@angular/core';
import {User} from '../user';
import {UserService} from '../services/user.service';
import {ActivatedRoute,Route} from '@angular/router';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() ip_sel_user : User ; 
  //ip_sel_user= new User(); 
  alnum_pressed = false;

  constructor(
    private _route: ActivatedRoute,
    private _usrService:UserService,
    private router: Router
  ) {
      
   }
   id = this._route.snapshot.paramMap.get('id');

  ngOnInit() {
    this.getUser();
  }

   getUser(){
    this._usrService.getUser(this.id)
    .subscribe(
      //abc =>this.ip_sel_user = abc[0]
      (res : any)=>{
        this.ip_sel_user=res[0]
        }
    );
  }

  updateUser(){
    this._usrService.updateUser(this.ip_sel_user)
    .subscribe(()=>this.goBack());
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
    else{
      this.alnum_pressed = true;
    }
  }



}
