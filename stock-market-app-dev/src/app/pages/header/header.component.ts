import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routing: Router) { }

  ngOnInit(): void {
  }

  links = ['Home', 'Team Store', 'Contact'];
  activeLink = this.links[0];
  background: ThemePalette = 'primary';

  goHome() {
    this.routing.navigate(['/home']);
  }
  goCollections() {
    this.routing.navigate(['/collections']);
  }
  goContactPage() {
    this.routing.navigate(['/contact-page']);
  }
  goCart() {
    this.routing.navigate(['/cart']);
  }

}
