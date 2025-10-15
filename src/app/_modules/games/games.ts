import { Component } from '@angular/core';
import { Header } from "./_components/header/header";
import { Footer } from "./_components/footer/footer";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-games',
  imports: [Header, Footer, RouterModule],
  templateUrl: './games.html',
  styleUrl: './games.css',
  standalone: true
})
export class Games {

}
