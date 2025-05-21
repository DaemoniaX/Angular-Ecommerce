import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button class="bg-red-500/75 text-black w-full border px-5 py-2 rounded shadow-md hover:opacity-90"(click)="buttonClicked.emit()">
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label = input('');

  buttonClicked = output();
}
