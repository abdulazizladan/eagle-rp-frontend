import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMachineryComponent } from './add-machinery.component';

describe('AddMachineryComponent', () => {
  let component: AddMachineryComponent;
  let fixture: ComponentFixture<AddMachineryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMachineryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
