import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-generators',
  imports: [FormsModule],
  templateUrl: './password-generators.html',
  styleUrl: './password-generators.css',
})
export class PasswordGenerators {
  password: string = '';
  passwordLength: number = 6;

  specialCharacters: string = '!@#$%&*';
  numbers: string = '0987654321';
  upperCase: string = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ';
  lowerCase: string = 'abcdefghijklmnopqrstuvwxyz';

  exclude = {
    special: true,
    numbers: true,
    upper: true,
    lower: true,
  };

  makePassword() {
    let allChars = '';

    if (this.exclude.special) {
      allChars += this.specialCharacters;
    }
    if (this.exclude.numbers) {
      allChars += this.numbers;
    }
    if (this.exclude.upper) {
      allChars += this.upperCase;
    }
    if (this.exclude.lower) {
      allChars += this.lowerCase;
    }

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
    console.log(this.password);
  }

  copyPassword() {}
}
