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
currentVolume = 1;
currentTime = 0;
duration = 0;

ngAfterViewInit() {
  const audio = this.audioRef.nativeElement;

  audio.addEventListener('loadedmetadata', () => {
    this.duration = audio.duration;
  });

  audio.addEventListener('timeupdate', () => {
    this.currentTime = audio.currentTime;
  });
}

formatTime(seconds: number): string {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

seek(value: string) {
  const audio = this.audioRef.nativeElement;
  const time = parseFloat(value);
  audio.currentTime = time;
  this.currentTime = time;
}

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
    {id: 1, img: '', title: 'اهنگ سنتی', singer: 'singer1', src: 'assets/musics/1.mp3'},
    {id: 2, img: '', title: 'اهنگ سنتی2', singer: 'singer2', src: 'assets/musics/2.mp3'},
    {id: 3, img: '', title: 'اهنگ بند ناف', singer: 'singer3', src: 'assets/musics/file.mp3'}
  ];
  currentIndex = 0
  get currentMusic() {
  return this.musics[this.currentIndex];
}

  playMusic(index: number){
  this.currentIndex = index;
  const audio = this.audioRef.nativeElement;
  audio.src = this.currentMusic.src;
  audio.load();
  audio.play();
  console.log('play music');
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
        if (this.currentIndex > 0) {
        this.currentIndex--;
        audio.src = this.currentMusic.src;
        audio.load();
        audio.play();
      }
        break;
      case 'next':
        if (this.currentIndex < this.musics.length - 1) {
        this.currentIndex++;
        audio.src = this.currentMusic.src;
        audio.load();
        audio.play();
      }
        break;
      }
   }

   volume(value: string) {
    const audio = this.audioRef.nativeElement;
    const numericValue = parseFloat(value);
    this.currentVolume = Math.max(0, Math.min(1, numericValue));
    audio.volume = this.currentVolume;  
  }



}