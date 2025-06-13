import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../../models/video';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medias',
  imports: [CommonModule],
  templateUrl: './medias.component.html',
  styleUrl: './medias.component.scss'
})
export class MediasComponent implements OnInit {
  medias: Video[] = [];

  ngOnInit(): void {
    this.medias = [
      {
        date: new Date('2021-04-22'),
        channel: 'BFM Business',
        title: `Le surplus d’épargne lié à la crise de Covid-19 va-t-il pousser les Français à investir davantage ?`,
        text: `Ce jeudi 22 avril, Philippe Lauzeral, directeur général délégué de Stellium, s'est penché sur les produits d'investissement à privilégier pour les Français qui ont cumulé des montagnes d'épargne en un an, dans l'émission BFM Bourse présentée par Guillaume Sommerer.`,
        link: 'https://www.dailymotion.com/video/x80slvn'
      },
      {
        date: new Date('2022-12-08'),
        channel: 'BFM Business',
        title: `L'immobilier constitue-t-il encore un rempart contre l'inflation ?`,
        text: `Philippe Lauzeral, directeur général délégué de Stellium`,
        link: 'https://www.youtube.com/watch?v=A8wxZFfOsqQ'
      },
    ];
  }

  extractYouTubeId(link: string): string {
    const match = link.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/);
    return match ? match[1] : '';
  }
}
