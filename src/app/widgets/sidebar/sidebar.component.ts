import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  addCustomClass: boolean = true;
  isActive: boolean = false;

  toggleCustomClass() {
    this.addCustomClass = !this.addCustomClass;
  }
  toggleActive() {
    this.isActive = !this.isActive;
  }
}
