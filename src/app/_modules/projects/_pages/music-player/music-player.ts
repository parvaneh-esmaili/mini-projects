import { NgClass } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-music-player',
  imports: [NgClass],
  templateUrl: './music-player.html',
  styleUrl: './music-player.css',
  standalone: true
})
export class MusicPlayer {
@ViewChild('audioRef') audioRef!: ElementRef<HTMLAudioElement>;

  buttons = [
    { icon: 'fa-solid fa-rotate-left', class: 'h-10 w-10', action: 'backward10' },
    { icon: 'fa-solid fa-backward', class: 'h-12 w-12', action: 'prev' },
    { icon: 'fa-solid fa-play', class: 'h-14 w-14', action: 'play' },
    { icon: 'fa-solid fa-forward', class: 'h-12 w-12', action: 'next' },
    { icon: 'fa-solid fa-rotate-right', class: 'h-10 w-10', action: 'forward10' }
  ];

  musics = [
    {id: 1, img: '', title: 'اهنگ سنتی', singer: 'singer1', src: 'assets/musics/1.mp3'},
    {id: 2, img: '', title: 'اهنگ سنتی2', singer: 'singer2', src: 'assets/musics/2.mp3'},
    {id: 3, img: '', title: 'اهنگ بند ناف', singer: 'singer3', src: 'assets/musics/file.mp3'},
  ];
  currentIndex = 0
  get currentMusic() {
  return this.musics[this.currentIndex];
}

  handleActions(action: string) {
    const audio = this.audioRef.nativeElement;
    if (!audio) return;

    switch (action) {
      case 'play':
        audio.play();
        break;
      case 'backward10':
        audio.currentTime = Math.max(audio.currentTime - 10, 0);
        break;
      case 'forward10':
        audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
        break;
      case 'prev':
        this.currentIndex--
        console.log(this.musics[this.currentIndex])
        break;
      case 'next':
        this.currentIndex++
        console.log(this.musics[this.currentIndex])
        break;
    }
  }
}