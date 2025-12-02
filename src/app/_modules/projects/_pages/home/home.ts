import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectCard } from '../../_cards/project-card/project-card';

@Component({
  selector: 'app-home',
  imports: [ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
})
export class Home {
  constructor(private router: Router) {}

projects = [
  {
    title: '🎵 Music Player',
    description: 'Play and enjoy music.',
    buttonText: 'Open Player',
    route: '/music-player',
  },
  {
    title: '📝 Todo List',
    description: 'Manage your tasks easily.',
    buttonText: 'Open Todo List',
    route: '/todo-list',
  },
  {
    title: '✍️ Lorem Maker',
    description: 'Make random text quickly.',
    buttonText: 'Generate Text',
    route: '/lurem-maker',
  },
  {
    title: '❓ Quiz App',
    description: 'Answer fun quiz questions.',
    buttonText: 'Start Quiz',
    route: '/quiz-app',
  },
  {
    title: '🔐 Password Generator',
    description: 'Create strong passwords fast.',
    buttonText: 'Generate Password',
    route: '/password-generator',
  },
    {
    title: 'login page',
    description: 'Create strong passwords fast.',
    buttonText: 'Generate Password',
    route: '/login-page',
  },
]

  navigateToGame(project: string) {
    this.router.navigate([`${project}`]);
  }
}
