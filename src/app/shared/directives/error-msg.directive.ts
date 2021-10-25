import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }

  // @Input() mensaje: string = 'Este campo es necesario';
  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean) {
    if (valor === true) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    // console.log('constructor directive');
    // console.log(el);

    this.htmlElement = this.el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.mensaje) {
    //   const mensaje = changes.mensaje.currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }
    // if (changes.color) {
    //   const color = changes.color.currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
    // console.log(changes);
  }

  ngOnInit() {
    // console.log('ngOnInit directiva');
    // console.log(this.color);  // undefined
    // console.log(this.mensaje);  // undefined

    // Inicio aquí estos tres métodos para el caso en que no se usen los atributos de la directiva
    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  setEstilo(): void {
    // classList agrega una clase con el nombre que yo le ponga
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    // Una vez que llego a nativeElement, ya empiezo a usar Vanilla JavaScript
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}
