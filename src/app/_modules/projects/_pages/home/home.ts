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

  projects = [
  {
    title: '🎵 Music Player',
    description: 'Listen to your favorite tracks, create playlists, and enjoy seamless audio playback.',
    buttonText: 'Open Player',
    route: '/music-player'
  },
  {
    title: '📝 Todo List',
    description: 'Organize your tasks, set deadlines, and boost your productivity with this simple todo app.',
    buttonText: 'Open Todo List',
    route: '/todo-list'
  },
];

  navigateToGame( project: string) {
    this.router.navigate([`${project}`]);
  }

}
