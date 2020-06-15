import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user-service/user.service';

@Component({
  selector: 'app-user-list-screen',
  templateUrl: './user-list-screen.component.html',
  styleUrls: ['./user-list-screen.component.css']
})
export class UserListScreenComponent implements OnInit 
{
  userList : any = [];

  constructor( private userService : UserService ) { }
  
  fetchUsers()
  {
    this.userService.getuserlist().subscribe(
        //this.userService.getuserlist()
        (data) => {
           this.userList = data;
           console.log(this.userList);
        },

        (error) => {
          console.log('Error: ', error);
      
      }

    );
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  
}
