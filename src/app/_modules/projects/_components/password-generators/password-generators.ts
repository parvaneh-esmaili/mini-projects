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

  makePassword() {
    this.password = '';

    const allChars =
      this.specialCharacters + this.numbers + this.upperCase + this.lowerCase;

    for (let i = 0; i < this.passwordLength; i++) {
      const passwordGenerator = Math.floor(Math.random() * allChars.length);

      this.password += allChars.charAt(passwordGenerator);
    }
    console.log(this.password);
  }

  copyPassword() {}
}
