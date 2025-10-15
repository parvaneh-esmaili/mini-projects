import { Component } from '@angular/core';
import { GameCard } from "../../_cards/game-card/game-card";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [GameCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {
 constructor(private router: Router) {}

  navigateToGame() {
    this.router.navigate(['/rock-paper-scissors']);
  }

}
