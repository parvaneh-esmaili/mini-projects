import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoremMaker } from './lorem-maker';


describe('LoremMaker', () => {
  let component: LoremMaker;
  let fixture: ComponentFixture<LoremMaker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoremMaker],
    }).compileComponents();

    fixture = TestBed.createComponent(LoremMaker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
