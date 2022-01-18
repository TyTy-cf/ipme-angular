import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YahtzeeComponent } from './yahtzee.component';

describe('YahtzeeComponent', () => {
  let component: YahtzeeComponent;
  let fixture: ComponentFixture<YahtzeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YahtzeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YahtzeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
