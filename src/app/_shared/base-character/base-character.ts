import { NgClass, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-character',
  imports: [NgClass, NgStyle,],
  templateUrl: './base-character.html',
  standalone: true,
  styleUrl: './base-character.css'
})
export class BaseCharacter {

  @Input() color: string = 'bg-red-400';
  @Input() height: string = 'h-80';
  @Input() width: string = 'w-40';
  @Input() eyePositions: {x: number, y: number}[] = [];
  @Input() mouthType: 'smile' | 'flat' | 'circle' = 'smile';
  @Input() rounded: string = 'rounded-t-full';

  mouseX: number = 0;
  mouseY: number = 0;

  constructor() {
    window.addEventListener('mousemove', (event: MouseEvent) => {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    });
  }

  getPupilTransform(eyeX: number, eyeY: number): string {
    const dx = this.mouseX - eyeX;
    const dy = this.mouseY - eyeY;
    const maxOffset = 8;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance === 0) return 'translate(0px,0px)';
    const ratio = maxOffset / distance;
    return `translate(${dx * ratio}px, ${dy * ratio}px)`;
  }
}
