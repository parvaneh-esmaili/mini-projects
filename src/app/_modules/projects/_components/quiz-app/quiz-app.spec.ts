import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizApp } from './quiz-app';

describe('GuizApp', () => {
  let component: QuizApp;
  let fixture: ComponentFixture<QuizApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
