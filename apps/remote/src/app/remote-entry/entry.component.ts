import { DATA_SERVICE_TOKEN } from '@ng-mf/shared-services';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'ng-mf-remote-entry',
  template: `
    <div>
      <h1>DATA FROM API</h1>
      @if (items$ | async; as items) { @for (item of items; track item) {
      <li>{{ item | json }}</li>
      } }
    </div>
  `,
})
export class RemoteEntryComponent {
  private dataService = inject(DATA_SERVICE_TOKEN);

  readonly items$ = this.dataService.getData();
}
