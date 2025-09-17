import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'osana-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public router: Router) {}
}
