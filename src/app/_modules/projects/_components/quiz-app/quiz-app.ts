import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-quiz-app',
  imports: [NgClass, FormsModule],
  templateUrl: './quiz-app.html',
  standalone: true,
  styleUrl: './quiz-app.css'
})
export class QuizApp {
  currentQuestionIndex = 0;
  answer = 0;
  selectedIndex = 0;
  isNextDisabled = false;
  isPrevDisabled = false;
  score = 0;
  win = false;
  feedback = '';

  questions = [
  {
    question: "پایتخت کشور فرانسه کدام است؟",
    options: ["پاریس", "مادرید", "رم", "برلین"],
    answer: 0
  },
  {
    question: "کدام سیاره به عنوان سیاره سرخ شناخته می‌شود؟",
    options: ["زهره", "مریخ", "عطارد", "مشتری"],
    answer: 1
  },
  {
    question: "کدام عدد اول است؟",
    options: ["۶", "۹", "۴", "۷"],
    answer: 3
  },
  {
    question: "نویسنده کتاب «شازده کوچولو» کیست؟",
    options: ["آلبر کامو", "ژول ورن", "ویکتور هوگو", "آنتوان دو سنت اگزوپری"],
    answer: 3
  },
  {
    question: "واحد پول کشور ژاپن چیست؟",
    options: ["دلار", "یوان", "ین", "وون"],
    answer: 2
  }
];


checkAnswer(selectedIndex: number) {
  const currentQuestion = this.questions[this.currentQuestionIndex];
  if (selectedIndex === currentQuestion.answer) {
    this.score++;
    this.currentQuestionIndex++;
    this.feedback = '✅ جواب درست بود!';
  } else {
    this.feedback = '❌ جواب اشتباه بود!';
    this.currentQuestionIndex++;

  }
  if (this.currentQuestionIndex === this.questions.length - 1) {
      this.win = true;
    }
}


nextBTN() {
  if (this.currentQuestionIndex + 1 < this.questions.length) {
    this.currentQuestionIndex++;
  }

  if (this.currentQuestionIndex === this.questions.length - 1) {
    this.isNextDisabled = true;
    this.win = true
  } else {
    this.isNextDisabled = false;
  }

  this.isPrevDisabled = this.currentQuestionIndex === 0;
}

prevBTN() {
  if (this.currentQuestionIndex > 0) {
    this.currentQuestionIndex--;
  }

  if (this.currentQuestionIndex === 0) {
    this.isPrevDisabled = true;
  } else {
    this.isPrevDisabled = false;
  }

  this.isNextDisabled = this.currentQuestionIndex === this.questions.length - 1;
}
resetQuiz(){
  this.win = false;
  this.currentQuestionIndex = 0;
  this.feedback = '';

}

}
