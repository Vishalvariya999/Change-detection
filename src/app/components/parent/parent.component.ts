import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
  public counter: number = 0;
  @Input() data: any;
  constructor(private ref: ChangeDetectorRef) {}
  update() {
    // this.ref.detectChanges();
  }

  public onIncrement() {
    this.counter++;
  }
}
