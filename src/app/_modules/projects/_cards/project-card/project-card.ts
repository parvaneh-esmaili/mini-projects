import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'project-card',
  imports: [NgClass],
  templateUrl: './project-card.html',
  standalone: true,
  styleUrl: './project-card.css'
})
export class ProjectCard {
  @Input() title!: string;
  @Input() description!: string;
  @Input() buttonText: string = 'Submit';
  @Input() disabled: boolean = false;

  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }
}
