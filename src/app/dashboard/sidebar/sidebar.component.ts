import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  faCoffee,
  faHome,
  faHashtag,
  faFile,
  faPowerOff,
  faBug,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebar') sidebar: ElementRef;
  faCoffee = faCoffee;
  faHome = faHome;
  faHashtag = faHashtag;
  faFile = faFile;
  faPowerOf = faPowerOff;
  faBug = faBug;

  menuItems = [
    { iconName: this.faHome },
    { iconName: this.faHashtag },
    { iconName: this.faFile },
    { iconName: this.faBug },
  ];

  constructor() {}

  Openbar() {
    const sidebarelement = this.sidebar.nativeElement;
    sidebarelement.classList.toggle('hidden');
  }

  ngOnInit(): void {}
}
