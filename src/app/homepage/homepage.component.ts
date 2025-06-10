import { Component } from '@angular/core';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { EventsComponent } from '../events/events.component';
import { MediasComponent } from '../medias/medias.component';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-homepage',
  imports: [TestimonialComponent, EventsComponent, MediasComponent, NewsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
