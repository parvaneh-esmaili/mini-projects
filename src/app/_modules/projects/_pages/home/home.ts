import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectCard } from "../../_cards/project-card/project-card";

@Component({
  selector: 'app-home',
  imports: [ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {
 constructor(private router: Router) {}

  navigateToGame( project: string) {
    this.router.navigate([`${project}`]);
  }

}
