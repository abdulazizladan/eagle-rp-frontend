import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrl: './staff-details.component.scss'
})
export class StaffDetailsComponent implements OnInit{

  id: string | null = "";
  private route = inject(ActivatedRoute)

  constructor() {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
  }
}
