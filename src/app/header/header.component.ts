import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen!: boolean;
  logo!: string;
  alt!: string;
  presentation!: string;
  about!: string;
  support!: string;
  feedback!: string;
  contact!: string;

  ngOnInit(): void {
    this.isMenuOpen = false;
    this.logo = 'assets/logo-site.png';
    this.alt = 'logo site';
    this.presentation = 'Accueil';
    this.about = 'A propos';
    this.support = 'Mon accompagnement';
    this.feedback = 'Ce que mes clients en pensent';
    this.contact = 'Contact';
  }
}
