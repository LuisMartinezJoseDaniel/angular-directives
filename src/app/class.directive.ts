import { Directive, ElementRef, Input } from '@angular/core';

//* Custom directive like ngClass of Angular 

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef) {}

  // <h1 [appClass] =" 'red' "></h1>
  // Angular create a new Instance of the class with the selector appClass
  //  and redirect to this method and set classNames
  @Input('appClass') set classNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        // If the key is truthy {color: true}
        this.element.nativeElement.classList.add(key); // Add the classList of the element
      } else {
        this.element.nativeElement.classList.remove(key); // Remove the classList of the element
      }
    }
  }
}
