import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-the-number',
  imports: [FormsModule],
    templateUrl: './guess-the-number.html',
  styleUrl: './guess-the-number.css'
})
export class GuessTheNumber implements OnInit {

  mainNumber: number = 0;
  userNumber: number = 0;
  message : string = ''
  winner: string = '';


  ngOnInit(): void {
    this.mainNumber = Math.floor(Math.random() *100)
      console.log(this.mainNumber)}

guessNumber(userNumber: number) {
  if (userNumber < 0 || userNumber > 100) {
    this.message = "Please enter a number between 0 and 100.";
    return;
  }

  if (this.userNumber > this.mainNumber) {
    this.message = "The number is smaller than this";
  } else if (this.userNumber < this.mainNumber) {
    this.message = "The number is bigger than this";
  } else {
    this.winner = "You won!!";
  }
}

reset() {
  this.userNumber = 0;
  this.message = '';
  this.winner = '';
  this.mainNumber = Math.floor(Math.random() * 100);
}

}
