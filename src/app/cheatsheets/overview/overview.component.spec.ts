import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatsheetsOverviewComponent } from './overview.component';

describe('CheatsheetsOverviewComponent', () => {
  let component: CheatsheetsOverviewComponent;
  let fixture: ComponentFixture<CheatsheetsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheatsheetsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheatsheetsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
