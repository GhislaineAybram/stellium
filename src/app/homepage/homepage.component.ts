import { Component } from '@angular/core';
import { TestimonialComponent } from '../testimonial/testimonial.component';

@Component({
  selector: 'app-homepage',
  imports: [TestimonialComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
