import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-generators',
  imports: [FormsModule, NgClass],
  templateUrl: './password-generators.html',
  styleUrl: './password-generators.css',
  standalone: true
})
export class PasswordGenerators {
  password: string = '';
  passwordLength: number = 6;

  specialCharacters: string = '!@#$%&*';
  numbers: string = '0123456789';
  upperCase: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  lowerCase: string = 'abcdefghijklmnopqrstuvwxyz';

  exclude = {
    special: true,
    numbers: true,
    upper: true,
    lower: true,
  };

  securityLevel: number = 0;

  evaluateSecurity(password: string) {
    let score = 0;

    if (password.length >= 12) score += 2;
    else if (password.length >= 8) score += 1;

    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^a-zA-Z0-9]/.test(password)) score += 1;

    if (score >= 6) this.securityLevel = 4;
    else if (score >= 4) this.securityLevel = 3;
    else if (score >= 2) this.securityLevel = 2;
    else this.securityLevel = 1;
  }

  makePassword() {
    let allChars = '';

    if (this.exclude.special) allChars += this.specialCharacters;
    if (this.exclude.numbers) allChars += this.numbers;
    if (this.exclude.upper) allChars += this.upperCase;
    if (this.exclude.lower) allChars += this.lowerCase;

    if (allChars.length === 0) {
      this.password = 'No characters selected!';
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedPassword += allChars.charAt(randomIndex);
    }

    this.password = generatedPassword;
    this.evaluateSecurity(this.password);
    console.log(this.password);
  }

  copyPassword() {
    navigator.clipboard.writeText(this.password);
  }
}
