import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  styleUrl: './app.component.scss',
  template: ` <div>Connected to github.</div> `,
})
export class AppComponent {
  title = 'observational_skills';
}
