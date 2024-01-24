import { Component, OnInit, inject, effect, Injector, EffectRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { SalesService } from '../../services/sales.service';
import { InvoiceType } from '../../models/invoice.model';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrl: './create-invoice.component.scss'
})
export class CreateInvoiceComponent {

  /*private fb = inject(FormBuilder);
  private salesService  = inject(SalesService);
  public invoiceForm!: FormGroup;
  private effectReference!: EffectRef;

  initializeForm() {
    this.invoiceForm = this.fb.group({

    })
  }

  constructor(private injector: Injector) {
    effect(() => {

    })
  }

  initEffect() {
    this.effectReference = effect(() => {

    }, {injector: this.injector})
  }

  removeEffect() {
    this.effectReference.destroy();
  }

  ngOnInit(): void {

  }

  submit( details: InvoiceType ) {
    const invoiceDetails = details;
    this.salesService.createInvoice(invoiceDetails)
  }*/

}
