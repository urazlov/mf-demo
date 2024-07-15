import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'ng-mf-dynamic-loader',
  standalone: true,
  template: `
  <button (click)="load()">Load Component</button>
  <div #placeHolder></div>
  `,
})
export class DynamicLoaderComponent {

  @ViewChild('placeHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  async load(): Promise<void> {

    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.mjs',
      exposedModule: './RemoteEntryComponent'
    });

    console.log(m)

    this.viewContainer.createComponent(m.RemoteEntryComponent);
}

}
