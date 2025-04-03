import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CargoformComponent } from './cargoform/cargoform.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CargoformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cargo';
}
