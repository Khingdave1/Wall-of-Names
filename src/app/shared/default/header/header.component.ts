import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hamClick: any;

  navLink: any = [
    {
      name: "Alumni",
      link: "/alumni",
      subLinks: []
    },
    {
      name: "Staff",
      link: "/staff",
      subLinks: []
    },
    {
      name: "Hall of Residence",
      link: "/hall-of-residence",
      subLinks: []
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  // Open Menu
  openMenu() {
    this.hamClick = !this.hamClick
  }

  // Close Menu
  closeMenu() {
    this.hamClick = false
  }

}
