import { Component } from '@angular/core';
import { SubHeaderComponent } from '../../widgets/sub-header/sub-header.component';
import { TotalCardComponent } from '../../widgets/total-card/total-card.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SubHeaderComponent,
    MatIconModule,
    TotalCardComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title: string = 'Home';
  description: string = 'Home Page Description';
  recentBlogs = [1, 2, 3, 4, 5]; //To loop the content to avoid duplication

  icon: string = 'shopping_cart';
  totalValue: string = 'shopping_cart';
  text: string = 'shopping_cart';

  //populating total card content
  totalCard: any[] = [
    { id: 1, icon: 'shopping_cart', totalValue: '345', text: 'Total Orders' },
    {
      id: 2,
      icon: 'account_balance_wallet',
      totalValue: '267',
      text: 'Total Expenses',
    },
    { id: 3, icon: 'assessment', totalValue: '345', text: 'Total Revenue' },
    { id: 4, icon: 'person', totalValue: '345', text: 'New Users' },
  ];
}
