import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiscordService } from './services/discord.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  styleUrl: './app.component.scss',
  template: `<main>
    <h1>WELCOME</h1>
    <div class="inner">
      <h2>SUBMIT OBSERVATION:</h2>
      <textarea
        id="observation-textarea"
        rows="4"
        cols="50"
        placeholder="What do you see?"
        [formControl]="observationControl"
      ></textarea>
      <button (click)="submitObservation()">SUBMIT</button>
      <h2>NEWSLETTER OF OBSERVATIONS:</h2>
      <div class="container">
        <input
          id="email-input"
          type="text"
          placeholder="Email"
          [formControl]="emailControl"
        />
        <button id="subscribe-button" (click)="submitEmail()">SUBSCRIBE</button>
      </div>
    </div>
  </main>`,
})
export class AppComponent {
  public discordService = inject(DiscordService);
  // Must be required
  public observationControl = new FormControl('', Validators.required);
  public emailControl = new FormControl('', Validators.required);

  title = 'observational_skills';

  submitObservation() {
    const observation = this.observationControl.value as string;
    this.discordService.sendMessage(observation, 'observation');
    this.observationControl.reset();
  }

  submitEmail() {
    const email = this.emailControl.value as string;
    this.discordService.sendMessage(email, 'newsletter');
    this.emailControl.reset();
  }
}
