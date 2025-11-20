import { Component } from '@angular/core';

@Component({
  selector: 'app-lorem-maker',
  imports: [],
  templateUrl: './lorem-maker.html',
  styleUrl: './lorem-maker.css',
})
export class LoremMaker {
  paraNumber = 0;
  baseText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore massa.';
  loremText = '';
  wordCount = 0;
  showToast = false;

  buttons = [
    {
      label: 'Add Sentence',
      icon: 'fa-plus-circle',
      color: 'bg-accent hover:bg-primary',
      action: () => this.plusOne(),
    },
    {
      label: 'Delete Sentence',
      icon: 'fa-minus-circle',
      color: 'bg-primary hover:bg-secondary',
      action: () => this.minusSentence(),
    },
    {
      label: 'Copy Paragraph',
      icon: 'fa-copy',
      color: 'bg-secondary hover:bg-accent',
      action: () => this.copyText(),
    },
  ];

  plusOne() {
    this.paraNumber++;
    this.loremText = this.baseText.repeat(this.paraNumber);
    this.wordCount = this.loremText.split(' ').length;
  }

  minusSentence() {
    if (this.paraNumber > 0) {
      this.paraNumber--;
      this.loremText = this.baseText.repeat(this.paraNumber);
      this.wordCount = this.loremText.split(' ').length;
    }
  }

  copyText() {
    if (this.loremText) {
      navigator.clipboard
        .writeText(this.loremText)
        .then(() => {
          this.showToast = true;
        })
        .catch((err) => {
          console.error('Failed to copy:', err);
        });
    }
  }
}
