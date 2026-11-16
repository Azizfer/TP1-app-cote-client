import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friend-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './friend-list.html',
  styleUrl: './friend-list.css'
})
export class FriendList {
  friendsList = [
    { name: 'Sami', email: 'alice@example.com' },
    { name: 'Sarra', email: 'bob@example.com' },
    { name: 'Ahmed', email: 'charlie@example.com' }
  ];
}