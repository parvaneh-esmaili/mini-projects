import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-music-player',
  imports: [NgClass],
  templateUrl: './music-player.html',
  styleUrl: './music-player.css'
})
export class MusicPlayer {

  buttons= [
    {icon:'fa-solid fa-rotate-left', class:' h-10 w-10', action:'backward10'},
    {icon:'fa-solid fa-backward', class:' h-12 w-12', action:'prev'},
    {icon:'fa-solid fa-play', class:' h-14 w-14', action:'play'},
    {icon:'fa-solid fa-forward', class:' h-12 w-12', action:'next'},
    {icon:'fa-solid fa-rotate-right', class:' h-10 w-10', action:'forward10'}
  ];

handleActions(action: string){
  const audio = document.querySelector('audio') as HTMLAudioElement;
  if (!audio) return;

  switch(action){
    case 'play':
      console.log('play music')
      break;
    case 'prev':
      console.log('prev music')
      break;
    case 'backward10':
      console.log('backward10')
      break;
    case 'next':
      console.log('next music')
      break;
      case 'forward10':
        console.log('forward10')
        break
  }
}
}
