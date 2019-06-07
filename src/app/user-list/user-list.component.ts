import { Component, OnInit } from '@angular/core';
import {Iuser} from '../Interface/users';
@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Iuser[] = [
    {
      userId: 1,
      userName: "Deepthi",
      userPassword: "Deepthi",
      userEmail:"dgopi@kabbage.com",
      userRole: "Intern",
      userPermission: "Create"

    },
    {
      userId: 2,
      userName: "Anuhya",
      userPassword: "Anuhya",
      userEmail:"anu@kabbage.com",
      userRole: "Intern",
      userPermission: "Edit"
    },
    {
      userId: 3,
      userName: "Mahi",
      userPassword: "Mahi",
      userEmail:"mahi@kabbage.com",
      userRole: "Employee",
      userPermission: "Update"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
