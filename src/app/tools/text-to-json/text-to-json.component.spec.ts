import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToJsonComponent } from './text-to-json.component';

describe('TextToJsonComponent', () => {
  let component: TextToJsonComponent;
  let fixture: ComponentFixture<TextToJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextToJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextToJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
