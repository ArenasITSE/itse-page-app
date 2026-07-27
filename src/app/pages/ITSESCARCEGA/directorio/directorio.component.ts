import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DIRECTORIO_ROOT,
  DirectorioNode,
  filterDirectorioTree,
  flattenDirectorio,
  nodeCssClasses,
  nodeMatches,
} from './directorio.data';

@Component({
  selector: 'app-directorio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css'],
})
export class DirectorioComponent {
  readonly root = DIRECTORIO_ROOT;
  readonly filtro = signal('');

  readonly allNodes = flattenDirectorio(this.root);

  readonly stats = {
    personas: this.allNodes.length,
    subdirecciones: this.allNodes.filter((n) => n.node.level === 'sub').length,
    departamentos: this.allNodes.filter((n) => n.node.level === 'dep').length,
  };

  readonly filteredRoot = computed(() => {
    const q = this.filtro().trim().toLowerCase();
    return filterDirectorioTree(this.root, q) ?? this.root;
  });

  readonly treeStaff = computed(() =>
    (this.filteredRoot().children ?? []).filter((c) => c.level === 'staff')
  );

  readonly treeSubs = computed(() =>
    (this.filteredRoot().children ?? []).filter((c) => c.level === 'sub')
  );

  readonly listaFiltrada = computed(() => {
    const q = this.filtro().trim().toLowerCase();
    return flattenDirectorio(this.filteredRoot()).map(({ node, depth }) => ({
      node,
      depth,
      highlight: !!q && nodeMatches(node, q),
    }));
  });

  onFiltro(event: Event): void {
    const value = (event.target as HTMLInputElement).value ?? '';
    this.filtro.set(value);
  }

  clearFiltro(): void {
    this.filtro.set('');
  }

  classesFor(node: DirectorioNode): string {
    const classes = nodeCssClasses(node);
    const q = this.filtro().trim().toLowerCase();
    if (q) {
      if (nodeMatches(node, q)) {
        classes.push('highlight');
      } else {
        classes.push('filtered');
      }
    }
    return classes.join(' ');
  }

  teamLabel(team: string): string {
    switch (team) {
      case 'admin':
        return 'Administrativa';
      case 'planeacion':
        return 'Planeación';
      case 'vinculacion':
        return 'Vinculación';
      case 'academica':
        return 'Académica';
      case 'staff':
        return 'Staff';
      default:
        return 'Dirección';
    }
  }
}
