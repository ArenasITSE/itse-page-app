import { Injectable } from '@angular/core';
import {
  SITE_SEARCH_INDEX,
  SiteSearchEntry
} from '../data/site-search-index';

export interface SiteSearchHit extends SiteSearchEntry {
  score: number;
}

/**
 * Búsqueda en sitio (cliente).
 * Equivalente Angular a la vista PHP `?vista=Buscar` de tecnm.mx:
 * allí el servidor filtra registros; aquí se filtra un índice estático.
 */
@Injectable({ providedIn: 'root' })
export class SiteSearchService {
  search(rawQuery: string): SiteSearchHit[] {
    const terms = this.tokenize(rawQuery);
    if (terms.length === 0) {
      return [];
    }

    return SITE_SEARCH_INDEX
      .map((entry) => ({ ...entry, score: this.scoreEntry(entry, terms) }))
      .filter((hit) => hit.score > 0)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, 'es'));
  }

  private tokenize(query: string): string[] {
    return query
      .normalize('NFD')
      .replace(/\p{M}/gu, '')
      .toLowerCase()
      .split(/[^a-z0-9]+/i)
      .map((t) => t.trim())
      .filter((t) => t.length >= 2);
  }

  private scoreEntry(entry: SiteSearchEntry, terms: string[]): number {
    const haystack = this.normalize(
      [entry.title, entry.description, ...entry.keywords, entry.route].join(' ')
    );

    let score = 0;
    for (const term of terms) {
      if (!haystack.includes(term)) {
        return 0; // AND: todos los términos deben aparecer
      }
      if (this.normalize(entry.title).includes(term)) {
        score += 5;
      } else if (entry.keywords.some((k) => this.normalize(k).includes(term))) {
        score += 3;
      } else {
        score += 1;
      }
    }
    return score;
  }

  private normalize(value: string): string {
    return value
      .normalize('NFD')
      .replace(/\p{M}/gu, '')
      .toLowerCase();
  }
}
