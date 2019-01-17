import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';
import { Router, Event, NavigationStart, NavigationCancel, NavigationError, NavigationEnd } from "@angular/router";
import { slideInAnimation } from './app.animation'
import { MessageService } from "./messages/message.service";
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  checkRouterEvent(routerEvent: Event): void {
  
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }
    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    )
      this.loading = false;
  }
  pageTitle = 'Acme Product Management';
  loading: boolean = true;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  displayMessage(): void {
    this.router.navigate([{
      outlets: { popup: ['messages'] }
    }]);
    this.messageService.isDisplay = true;
  }

  hideMessage(): void {
       this.router.navigate([{
      outlets: { popup: null }
    }]);
    this.messageService.isDisplay = false;
  }
  get isMessageDisplay(): boolean {
    return this.messageService.isDisplay;
  }
  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }


  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) {
    router.events.subscribe(
      (routerEvent: Event) => {

        this.checkRouterEvent(routerEvent);
      }

    );

  }

  logOut(): void {
    this.authService.logout();
    console.log('Log out');
    this.router.navigateByUrl('/welcome');
  }
}
