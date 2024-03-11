import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssCursorComponent } from './css-cursor.component';

describe('CssCursorComponent', () => {
  let component: CssCursorComponent;
  let fixture: ComponentFixture<CssCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssCursorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
