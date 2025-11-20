import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-generators',
  imports: [FormsModule],
  templateUrl: './password-generators.html',
  styleUrl: './password-generators.css'
})
export class PasswordGenerators {
  password: string = 'hhluihluih';
  passwordLength: number= this.password.length

}
