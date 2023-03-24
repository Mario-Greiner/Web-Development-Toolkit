import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlEntitiesComponent } from './html-entities.component';

describe('HtmlEntitiesComponent', () => {
  let component: HtmlEntitiesComponent;
  let fixture: ComponentFixture<HtmlEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlEntitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
