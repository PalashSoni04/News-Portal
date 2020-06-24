import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user-service/user.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
    selector: 'app-get-new-user-screen',
    templateUrl: './get-new-user-screen.component.html',
    styleUrls: ['./get-new-user-screen.component.css'],
})
export class GetNewUserScreenComponent implements OnInit {
    userList: any = [];
    newUser = {
        name: '',
        email: '',
        password: '',
        role: '',
        status: '',
    };

    fetchUsers() {
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

    functionOnSubmit() {
        console.log('functionOnSubmit', this.newUser);
        this.userService.createNewUser(this.newUser).subscribe(
            (data) => {
                this.newUser = {
                    name: '',
                    email: '',
                    password: '',
                    role: '',
                    status: '',
                };
                this.fetchUsers();
                this.router.navigate(['/userlist']);
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    constructor(private router: Router, config: NgbModalConfig, private modalService: NgbModal, private userService: UserService) {}

    ngOnInit(): void {}
}
