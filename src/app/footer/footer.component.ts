import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  about!: string;
  legal!: string;
  privacy!: string;
  contact!: string;
  copyright!: string;

  ngOnInit(): void {
    this.about = 'A propos';
    this.legal = 'Mentions légales';
    this.privacy = 'Politique de confidentialité';
    this.contact = 'Contact';
    this.copyright = '© julien-poudras-cgp.io';
  }
}
