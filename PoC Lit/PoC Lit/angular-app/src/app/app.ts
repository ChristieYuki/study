import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // <-- Add this line
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  open: Boolean = true;

  toggleOpen() {
    this.open = !this.open
  }
}
