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
  private addCustomClass: boolean = true;
  public isActive: boolean = false;

  public toggleCustomClass() {
    this.addCustomClass = !this.addCustomClass;
  }
  
  public toggleActive() {
    this.isActive = !this.isActive;
  }
}
