import { Component, Input, OnInit } from '@angular/core';

import { Feedback } from '../../../models/feedback';

@Component({
  selector: 'app-testimonial',
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent implements OnInit {
  @Input() feedbacks!: Feedback[];
  
  currentIndex = 0;
  
  ngOnInit(): void {
    this.feedbacks = [
      {
        id: '1',
        feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.',
        author: 'Julie V.',
        rating: 5
      },
      {
        id: '2',
        feedback: 'Tempore quo primis auspiciis in mundanum fulgorem surgeret victura dum erunt homines Roma, ut augeretur sublimibus incrementis, foedere pacis aeternae Virtus convenit atque Fortuna plerumque dissidentes, quarum si altera defuisset, ad perfectam non venerat summitatem.',
        author: 'Marc G.',
        rating: 4
      },
    ];
  }

  get currentFeedback(): Feedback | undefined {
    return this.feedbacks[this.currentIndex];
  }

  get starsArray(): boolean[] {
    const rating = this.currentFeedback?.rating || 0;
    return Array(5).fill(false).map((_, index) => index < rating);
  }

  previousSlide(): void {
    this.currentIndex = this.currentIndex === 0 
      ? this.feedbacks.length - 1 
      : this.currentIndex - 1;
  }

  nextSlide(): void {
    this.currentIndex = this.currentIndex === this.feedbacks.length - 1 
      ? 0 
      : this.currentIndex + 1;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
