import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuremMaker } from './lurem-maker';

describe('LuremMaker', () => {
  let component: LuremMaker;
  let fixture: ComponentFixture<LuremMaker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuremMaker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuremMaker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
