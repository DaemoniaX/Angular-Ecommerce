import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-price-filter',
  standalone: true,
  template: `
    <div class="w-full max-w-xl mx-auto p-4">
      <div class="mb-2">
        <label class="text-sm">Minimum price: <strong>{{min}}€</strong> | Maximum price: <strong>{{max}}€</strong></label>
      </div>

      <div class="flex items-center gap-2 mb-2">
        <input type="number" [min]="globalMin" [max]="globalMax" [value]="min" (input)="onMinChange($any($event.target).value)" class="w-32 rounded border px-2 py-1" />
        <span>-</span>
        <input type="number" [min]="globalMin" [max]="globalMax" [value]="max" (input)="onMaxChange($any($event.target).value)" class="w-32 rounded border px-2 py-1" />
        <button (click)="reset()" class="ml-4 px-3 py-1 rounded bg-gray-200">Reset</button>
      </div>
    </div>
  `,
  styles: []
})
export class PriceFilterComponent implements OnChanges {
  @Input() globalMin = 0;
  @Input() globalMax = 1000;
  @Output() rangeChanged = new EventEmitter<{ min: number; max: number }>();

  min: number = 0;
  max: number = 1000;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['globalMin'] || changes['globalMax']) {
      if (this.min == null) this.min = this.globalMin;
      if (this.max == null) this.max = this.globalMax;
      this.min = Math.max(this.min, this.globalMin);
      this.max = Math.min(this.max, this.globalMax);
      if (this.min > this.max) {
        this.min = this.globalMin;
        this.max = this.globalMax;
      }
      this.emitRange();
    }
  }

  onMinChange(value: number | string) {
    const v = Number(value);
    this.min = Number.isNaN(v) ? this.globalMin : Math.min(v, this.max);
    if (this.min < this.globalMin) this.min = this.globalMin;
    this.emitRange();
  }

  onMaxChange(value: number | string) {
    const v = Number(value);
    this.max = Number.isNaN(v) ? this.globalMax : Math.max(v, this.min);
    if (this.max > this.globalMax) this.max = this.globalMax;
    this.emitRange();
  }

  reset() {
    this.min = this.globalMin;
    this.max = this.globalMax;
    this.emitRange();
  }

  private emitRange() {
    this.rangeChanged.emit({ min: Number(this.min), max: Number(this.max) });
  }
}
