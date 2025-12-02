import { NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { BaseCharacter } from "../../../../_shared/base-character/base-character";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [BaseCharacter, FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {

mouseX: number = 0;
  mouseY: number = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  // Change The Position Of Eyes
  getPupilTransform(eyeX: number, eyeY: number): string {
    const dx = this.mouseX - eyeX;
    const dy = this.mouseY - eyeY;
    const angle = Math.atan2(dy, dx);
    const distance = Math.min(8, Math.sqrt(dx*dx + dy*dy) / 20);
    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;
    return `translate(${offsetX}px, ${offsetY}px)`;
  }
  
  loginData = {
    userName: '',
    password: ''
  };

  onLogin() {
    if (this.loginData.userName && this.loginData.password) {
      console.log('ورود موفق با داده‌ها:', this.loginData);
    } else {
      console.log('لطفا نام کاربری و رمز عبور را وارد کنید');
    }
  }

   rrr = window.navigator.userAgent
   constructor(){
       console.log(this.rrr)

   }
}