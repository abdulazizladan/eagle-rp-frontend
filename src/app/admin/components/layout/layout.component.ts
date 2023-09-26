import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  private readonly router = inject(Router);
  private readonly http =inject(HttpClient);

  /**
   *
   */
  logout() {
    this.router.navigate(['../'])
  }

}
