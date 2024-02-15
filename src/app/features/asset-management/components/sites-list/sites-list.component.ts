import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSiteComponent } from '../add-site/add-site.component';
import { assetsStore } from '../../store/assets.store';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrl: './sites-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SitesListComponent {

  private dialog = inject(MatDialog);
  displayedColumns: Array<string> = ["name", "code", "id"];
  store = inject(assetsStore);

  openDialog() {
    this.dialog.open(
      AddSiteComponent,
      {
        ariaModal: true,
        maxWidth: 800
      }
    );
  }

  filter(keyword: string) {
    //console.log(keyword)
  }

}
