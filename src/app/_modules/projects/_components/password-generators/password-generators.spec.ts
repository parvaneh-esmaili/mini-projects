import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordGenerators } from './password-generators';

describe('PasswordGenerators', () => {
  let component: PasswordGenerators;
  let fixture: ComponentFixture<PasswordGenerators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordGenerators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordGenerators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
