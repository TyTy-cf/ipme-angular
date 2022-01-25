import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserCodeComponent } from './form-user-code.component';

describe('FormUserCodeComponent', () => {
  let component: FormUserCodeComponent;
  let fixture: ComponentFixture<FormUserCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
