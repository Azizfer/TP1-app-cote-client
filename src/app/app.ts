import { Component } from '@angular/core';
import { Header } from './Components/header/header';
import { Navbar } from './Components/navbar/navbar';
import { FriendList } from './Components/friend-list/friend-list';
import { Notifications } from './Components/notifications/notifications';
import { UserProfile } from './Components/user-profile/user-profile';
import { Footer } from './Components/footer/footer';
import { ConferenceList } from './Components/conference-list/conference-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Navbar, UserProfile, FriendList, Notifications, Footer, ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}