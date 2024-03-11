import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtfEightSymbolsComponent } from './utf-eight-symbols.component';

describe('UtfEightSymbolsComponent', () => {
  let component: UtfEightSymbolsComponent;
  let fixture: ComponentFixture<UtfEightSymbolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtfEightSymbolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtfEightSymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
