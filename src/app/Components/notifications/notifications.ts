import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {
  show = false;

  ShowNotifications(): void {
    this.show = !this.show;
  }

  notificationsList = [
    { id: 1, message: 'Bienvenue sur Conferencia !' },
    { id: 2, message: 'Une nouvelle conférence Angular est disponible.' },
    { id: 3, message: 'Sami vous a envoyé une demande d’amitié.' }
  ];

  removeNotification(id: number): void {
    this.notificationsList = this.notificationsList.filter(item => item.id !== id);
  }
}