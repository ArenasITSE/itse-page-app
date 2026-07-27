import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CONVOCATORIAS,
  ConvocatoriaEstado,
  ConvocatoriaItem,
  convocatoriaMatches,
} from './convocatoria.data';

type FiltroEstado = 'TODAS' | ConvocatoriaEstado;

@Component({
  selector: 'app-convocatoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.css'],
})
export class ConvocatoriaComponent {
  readonly filtro = signal('');
  readonly estado = signal<FiltroEstado>('TODAS');

  readonly ultimaActualizacion = '15 de mayo de 2026';

  readonly stats = {
    total: CONVOCATORIAS.length,
    abiertas: CONVOCATORIAS.filter((c) => c.estado === 'ABIERTA').length,
    cerradas: CONVOCATORIAS.filter((c) => c.estado === 'CERRADA').length,
  };

  readonly filtradas = computed(() => {
    const q = this.filtro().trim().toLowerCase();
    const estado = this.estado();
    return CONVOCATORIAS.filter((item) => {
      if (estado !== 'TODAS' && item.estado !== estado) {
        return false;
      }
      return convocatoriaMatches(item, q);
    }).sort((a, b) => b.fechaPublicacionIso.localeCompare(a.fechaPublicacionIso));
  });

  /** Abre la más reciente por defecto */
  readonly abiertaId = signal<string | null>(
    [...CONVOCATORIAS].sort((a, b) =>
      b.fechaPublicacionIso.localeCompare(a.fechaPublicacionIso)
    )[0]?.id ?? null
  );

  onFiltro(value: string): void {
    this.filtro.set(value ?? '');
  }

  clearFiltro(): void {
    this.filtro.set('');
  }

  setEstado(estado: FiltroEstado): void {
    this.estado.set(estado);
  }

  toggle(item: ConvocatoriaItem): void {
    this.abiertaId.update((id) => (id === item.id ? null : item.id));
  }

  isOpen(item: ConvocatoriaItem): boolean {
    return this.abiertaId() === item.id;
  }

  trackById(_: number, item: ConvocatoriaItem): string {
    return item.id;
  }
}
