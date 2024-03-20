import { UserService } from './../../services/user.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { UserModel } from '../../models/user-model';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatIconModule, HttpClientModule, DataTablesModule],
  providers: [UserService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  public isGridView: boolean = true; //to determine whether it is grid view or table view
  public users: UserModel[] = []; //Stores user list

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    //Loads users list and store it users array
    this.userService.getUsers().subscribe((u) => {
      this.users = u;
    });
  }
}
