import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pillar } from '../../../models/pillar';

@Component({
  selector: 'app-pillars',
  imports: [CommonModule],
  templateUrl: './pillars.component.html',
  styleUrl: './pillars.component.scss'
})
export class PillarsComponent {
  pillars: Pillar[] = [];

  ngOnInit(): void {
    this.pillars = [
      {
        name: 'Compléter ses revenus',
        description: 'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.'
      },
      {
        name: 'Protéger ses proches',
        description: 'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.'
      },
      {
        name: 'Préparer sa retraite',
        description: 'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.'
      },
      {
        name: 'Optimiser sa fiscalité',
        description: 'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.'
      },
    ]
  }
}
