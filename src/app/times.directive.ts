import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

//* Custom Structural Directives which multiples the element depend upon the times specified

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef, // reference of the element container,
    private templateRef: TemplateRef<any> // elements inside of the element that we applied our directive
  ) {}
  // alias of Input -> <ul *appTimes="5"></ul>
  // call a new instance of the selector appTimes and then executes this method
  @Input( 'appTimes' ) set render( times: number ) {
    this.viewContainer.clear(); // Clear elements inside of the viewContainer
    // And then create inside the viewContainer the elements inside
    for ( let i = 0; i < times; i++ ) { 
      // Context object is available for aliasing of our directive
      // aliasing refers to index in ngFor directive
      // Like <li *ngFor="let image of images; let i = index"></li>
      this.viewContainer.createEmbeddedView( this.templateRef, {
        index: i
      })
    }
  }
}
