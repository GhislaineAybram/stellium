import { Component, Input, OnInit } from '@angular/core';
import { Feedback } from '../models/feedback';

@Component({
  selector: 'app-testimonial',
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent implements OnInit {
  @Input() feedbacks!: Feedback[];

  ngOnInit(): void {
    this.feedbacks = [
      new Feedback(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.',
      'Julie V.',
      5),
      new Feedback(
      'Tempore quo primis auspiciis in mundanum fulgorem surgeret victura dum erunt homines Roma, ut augeretur sublimibus incrementis, foedere pacis aeternae Virtus convenit atque Fortuna plerumque dissidentes, quarum si altera defuisset, ad perfectam non venerat summitatem.',
      'Marc G.',
      4),
    ];
  }

  get firstFeedback(): Feedback | undefined {
    return this.feedbacks[0];
  }
}
