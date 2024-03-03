import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaffStore } from '../../store/staff.store';
import { Staff } from '../../models/staff.model';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrl: './staff-details.component.scss'
})
export class StaffDetailsComponent implements OnInit{

  id: string | null = "";
  private route = inject(ActivatedRoute);
  staff: Staff | undefined = undefined;
  store = inject(StaffStore);

  constructor() {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.staff = this.store.staff().find(staff => staff.basicInfo.id == this.id)
  }
}
