import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class AppComponent {
  title = 'popotillo-eshop';
}
