import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  Component,
  ComponentRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'ng-mf-dynamic-loader-with-inputs',
  standalone: true,
  template: ` <div #placeHolder></div> `,
})
export class DynamicLoaderWithInputsComponent<T> implements OnChanges, OnInit {
  @Input() inputs: T | null = null;

  @ViewChild('placeHolder', { read: ViewContainerRef })
  private readonly viewContainer!: ViewContainerRef;

  private componentRef: ComponentRef<any> | null = null;

  ngOnInit(): void {
    this.load();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['inputs'] && this.componentRef) {
      this.updateInputs();
    }
  }

  private async load(): Promise<void> {
    const module = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.mjs',
      exposedModule: './RemoteWithInputsComponent',
    });

    this.componentRef = this.viewContainer.createComponent(
      module.RemoteWithInputsComponent
    );

    if (this.inputs) {
      this.updateInputs();
    }
  }

  private updateInputs() {
    if (this.componentRef && this.inputs) {
      for (const [key, value] of Object.entries(this.inputs)) {
        this.componentRef.instance[key] = value;
      }
    }
  }
}
