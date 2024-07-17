import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicLoaderWithInputsComponent } from '../dynamic/dynamic-loader-with-inputs.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, DynamicLoaderWithInputsComponent],
  providers: [],
  selector: 'ng-mf-second-page',
  template: `HELLO I AM THIRD PAGE
    <button (click)="changeShow()">Change Show Input</button>
    <button (click)="changeItems()">Change Items Input</button>
    <ng-mf-dynamic-loader-with-inputs [inputs]="inputs"></ng-mf-dynamic-loader-with-inputs> `,
})
export class ThirdPageComponent {
  inputs = {
    show: true,
    items: ['hello', 'from', 'input']
  }

  changeShow() {
    this.inputs = {...this.inputs, show: !this.inputs.show}
  }

  changeItems() {
    this.inputs = {...this.inputs, items: ['hello', 'goobye']}
  }
}
