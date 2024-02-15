import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrl: './training-details.component.scss'
})
export class TrainingDetailsComponent implements OnInit{

  id: string | null = "";
  private route = inject(ActivatedRoute)

  constructor() {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
  }

}
