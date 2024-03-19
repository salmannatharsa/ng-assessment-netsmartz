import { UserService } from './../../services/user.service';
import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { SubHeaderComponent } from '../../widgets/sub-header/sub-header.component';
import { MatIconModule } from '@angular/material/icon';
import { BlogModel } from '../../models/blog-model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [SubHeaderComponent, MatIconModule, HttpClientModule, CommonModule],
  providers: [BlogService, UserService],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent implements OnInit {
  title: string = 'Blogs';
  subtext: string = 'Total user : 20';
  blogs: BlogModel[] = []; //Stores blog list
  users: UserModel[] = []; //Stores user list

  constructor(
    private blogService: BlogService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    //Loads users list and store it users array
    this.userService.getUsers().subscribe((u) => {
      this.users = u;
    });

    //Loads blogs list and store it in blogs arry.
    //Update username on each row by mapping with userId column and users array id column
    this.blogService.getBlogs().subscribe((b) => {
      this.blogs = b;
      this.blogs.map(
        (b) => (b.userName = this.users.filter((u) => u.id == b.userId)[0].name)
      );
    });
  }
}
