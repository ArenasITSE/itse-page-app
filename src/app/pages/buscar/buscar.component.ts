import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { isExternalSearchRoute } from '../../data/site-search-index';
import {
  SiteSearchHit,
  SiteSearchService
} from '../../services/site-search.service';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly searchService = inject(SiteSearchService);

  readonly isExternal = isExternalSearchRoute;

  /** Query `q` de la URL (#/buscar?q=...), como el POST `buscar` de TecNM. */
  readonly query = toSignal(
    this.route.queryParamMap.pipe(map((params) => (params.get('q') ?? '').trim())),
    { initialValue: '' }
  );

  readonly results = computed<SiteSearchHit[]>(() =>
    this.searchService.search(this.query())
  );
}
