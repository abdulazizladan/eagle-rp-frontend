import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSiteComponent } from '../add-site/add-site.component';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrl: './sites-list.component.scss'
})
export class SitesListComponent {

  private dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(AddSiteComponent, {});
  }

}
