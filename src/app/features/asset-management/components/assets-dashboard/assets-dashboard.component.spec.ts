import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsDashboardComponent } from './assets-dashboard.component';

describe('AssetsDashboarComponent', () => {
  let component: AssetsDashboardComponent;
  let fixture: ComponentFixture<AssetsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetsDashboardComponent]
    });
    fixture = TestBed.createComponent(AssetsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
