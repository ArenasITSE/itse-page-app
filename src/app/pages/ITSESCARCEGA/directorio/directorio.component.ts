import {
  Component,
  OnInit,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {

  filtro = '';

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {}

  filtrar(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    this.filtro =
      input.value.toLowerCase().trim();

    const nodes =
      this.elementRef.nativeElement
        .querySelectorAll('.node');

    nodes.forEach((node: Element) => {

      const htmlNode =
        node as HTMLElement;

      const texto =
        htmlNode.innerText.toLowerCase();

      const coincide =
        texto.includes(this.filtro);

      if (!this.filtro) {

        htmlNode.classList.remove('highlight');
        htmlNode.classList.remove('filtered');
        return;
      }

      htmlNode.classList.toggle(
        'highlight',
        coincide
      );

      htmlNode.classList.toggle(
        'filtered',
        !coincide
      );

    });
  }
}