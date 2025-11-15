import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  template: `
    <div class="w-full max-w-xl mx-auto p-4">
      <div class="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search products..."
          class="flex-1 rounded border px-3 py-2"
          (input)="onInput($any($event.target).value)"
        />

        <button class="ml-2 px-3 py-1 rounded bg-gray-200" (click)="onToggleFilter()">Filter</button>
      </div>
    </div>
  `,
  styles: []
})
export class SearchBarComponent {
  @Output() searchChanged = new EventEmitter<string>();
  @Output() filterToggled = new EventEmitter<void>();

  onInput(value: string) {
    this.searchChanged.emit(value ?? '');
  }

  onToggleFilter() {
    this.filterToggled.emit();
  }
}
