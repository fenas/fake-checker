import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ModalRef, ModalService } from 'zigzag';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebar') sidebar: ElementRef;

  menuItems = [
    { iconName: 'home-3-line', title: 'Home', route: 'home' },
    { iconName: 'flag-line', title: 'Report a Fake News', route: 'report' },
    { iconName: 'file-list-2-line', title: 'Reported by me', route: 'by-me' },
    {
      iconName: 'line-chart-line',
      title: 'Stats (coming soon...)',
      route: 'stats',
    },
  ];

  constructor(private modalsevice_: ModalService) {}

  Openbar() {
    const sidebarelement = this.sidebar.nativeElement;
    sidebarelement.classList.toggle('hidden');
  }

  ngOnInit(): void {}

  openModal() {
    const ref = this.modalsevice_.open<any, any>(SidebarComponent, {
      size: 'md',
    });
  }

  // close() {
  //   this.modalref_.close();
  // }
}
