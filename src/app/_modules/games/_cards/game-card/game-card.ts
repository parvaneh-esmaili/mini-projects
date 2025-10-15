import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-card',
  imports: [NgClass],
  templateUrl: './game-card.html',
  styleUrl: './game-card.css'
})
export class GameCard {
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
