import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

/** Minimal route target for routing demos (path params, query params, matrix params). */
@Component({
  selector: 'app-profile-demo',
  imports: [RouterLink, JsonPipe],
  templateUrl: './profile-demo.component.html',
})
export class ProfileDemoComponent {
  private readonly route = inject(ActivatedRoute);

  pathParams = toSignal(
    this.route.paramMap.pipe(
      map((p) => {
        const o: Record<string, string | null> = {};
        p.keys.forEach((k) => {
          o[k] = p.get(k);
        });
        return o;
      })
    ),
    { initialValue: {} as Record<string, string | null> }
  );

  queryParams = toSignal(
    this.route.queryParamMap.pipe(
      map((p) => {
        const o: Record<string, string | null> = {};
        p.keys.forEach((k) => {
          o[k] = p.get(k);
        });
        return o;
      })
    ),
    { initialValue: {} as Record<string, string | null> }
  );
}
