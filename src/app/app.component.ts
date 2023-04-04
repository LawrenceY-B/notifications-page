import { Component, OnInit } from '@angular/core';
import { IUserData } from 'src/assets/model/User.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'notifications-page';
  result: IUserData[] = [
    { id: 1, name: 'Mark Webber', isRead: false, club: '', imgURL: 'assets/images/avatar-mark-webber.webp',time:'1m ago',message:'' },
    { id: 2, name: 'Angela Gray', isRead: false, club: '', imgURL: 'assets/images/avatar-angela-gray.webp', time:'5m ago',message:'' },
    { id: 3, name: 'Jacob Thompson', isRead: false, club: 'Chess Club', imgURL: 'assets/images/avatar-jacob-thompson.webp', time:'1 day ago',message:'' },
    { id: 4, name: 'Rizky Hasanudin', isRead: true, club: '', imgURL: 'assets/images/avatar-rizky-hasanuddin.webp', time:'5 days ago',message:`Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.`},
    { id: 5, name: 'Kimberly Smith', isRead: true, club: '', imgURL: 'assets/images/avatar-kimberly-smith.webp', time:'1 week ago',message:'' },
    { id: 6, name: 'Nathan Peterson', isRead: true, club: '', imgURL: 'assets/images/avatar-nathan-peterson.webp', time:'2 weeks ago',message:'' },
    { id: 7, name: 'Anna Kim', isRead: true, club: 'Chess Club', imgURL: 'assets/images/avatar-anna-kim.webp', time:'2 weeks ago',message:'' },

  ]
  count!:number
  constructor() {
   
  }
  ngOnInit(): void {
this.checknum()
  }
  checkRead() {
    for (let person of this.result) {
      if (!person.isRead) {
        person.isRead = true;
      }
      console.log(person.name + ' ' + person.isRead)
    }
    console.log('has been clicked');
    this.checknum()
  }
  checknum(){
    this.count = 0;
    for (let person of this.result) {
      if (!person.isRead) {
        this.count++;
      }
    }
  }
}
