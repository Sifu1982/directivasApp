import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]',
})
export class CustomIfDirective {
  @Input() set customIf(condicion: boolean) {
    if (condicion) {
      // Mostrar elemento
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // Ocultar elemento
      this.viewContainer.clear();
    }
  }
  constructor(
    // templateRef va enlazado al símbolo "*" en el HTML para definir directivas estructurales, que son las que muestran u ocultan elementos HTML del DOM
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {}
}
