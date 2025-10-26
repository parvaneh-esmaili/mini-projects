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
    {icon:'fa-solid fa-rotate-left', class:' h-10 w-10'},
    {icon:'fa-solid fa-backward', class:' h-12 w-12'},
    {icon:'fa-solid fa-play', class:' h-14 w-14'},
    {icon:'fa-solid fa-forward', class:' h-12 w-12'},
    {icon:'fa-solid fa-rotate-right', class:' h-10 w-10'}
  ]
}
