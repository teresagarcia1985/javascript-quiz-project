class Quiz {
  // YOUR CODE HERE:

  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    for (
      let currentQuestionIndex = 0;
      currentQuestionIndex < this.questions.length;
      currentQuestionIndex++
    ) {
      return (currentQuestionIndex += currentQuestionIndex + 1);
    }
  }

  // 4. shuffleQuestions()

  // 5. checkAnswer(answer)

  // 6. hasEnded()
}
