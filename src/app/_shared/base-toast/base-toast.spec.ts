import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseToast } from './base-toast';

describe('BaseToast', () => {
  let component: BaseToast;
  let fixture: ComponentFixture<BaseToast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseToast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseToast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
