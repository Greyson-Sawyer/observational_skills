import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DiscordService {
  private http = inject(HttpClient);
  private observationsWebhookUrl =
    'https://discord.com/api/webhooks/1253516379164905522/xqXC0AAEdXVOerrlWwzS1JHS-ZON0jB-qjgPqmmfAdnuM9f6DjatVm9VhZ8bblh9k7i3';

  private newsletterWebhookUrl =
    'https://discord.com/api/webhooks/1253531431540363275/ZcV-Tev41rJ43DzUva-WMAw8H8uOR0mLgekwvqjACgqTv1J9yXQq1baPNUNlVpfpOBvq';

  constructor() {}

  sendMessage(message: string, type: 'observation' | 'newsletter'): void {
    const payload = {
      content: message,
    };

    const webhookUrl =
      type === 'observation'
        ? this.observationsWebhookUrl
        : this.newsletterWebhookUrl;

    this.http.post(webhookUrl, payload).subscribe({
      next: (response) => console.log('Message sent to Discord', response),
      error: (error) =>
        console.error('Error sending message to Discord', error),
    });
  }
}
