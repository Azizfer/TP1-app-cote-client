import { Component } from '@angular/core';
import { Header } from './Components/header/header';
import { Navbar } from './Components/navbar/navbar';
import { FriendList } from './Components/friend-list/friend-list';
import { Notifications } from './Components/notifications/notifications';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Navbar, FriendList, Notifications],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}