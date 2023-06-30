import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsDashboarComponent } from './assets-dashboar.component';

describe('AssetsDashboarComponent', () => {
  let component: AssetsDashboarComponent;
  let fixture: ComponentFixture<AssetsDashboarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetsDashboarComponent]
    });
    fixture = TestBed.createComponent(AssetsDashboarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
