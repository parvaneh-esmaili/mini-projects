import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCharacter } from './base-character';

describe('BaseCharacter', () => {
  let component: BaseCharacter;
  let fixture: ComponentFixture<BaseCharacter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseCharacter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseCharacter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
