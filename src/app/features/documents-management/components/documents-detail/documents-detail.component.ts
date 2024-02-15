import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documents-detail',
  templateUrl: './documents-detail.component.html',
  styleUrl: './documents-detail.component.scss'
})
export class DocumentsDetailComponent implements OnInit{

  id: string | null = "";
  private route = inject(ActivatedRoute)

  constructor() {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
  }

}
