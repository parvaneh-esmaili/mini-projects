import { Component } from '@angular/core';
import { Header } from "./_components/header/header";
import { Footer } from "./_components/footer/footer";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'projects',
  imports: [Header, Footer, RouterModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  standalone: true
})
export class Projects{

}
