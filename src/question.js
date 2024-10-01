class Question {
  // YOUR CODE HERE:
  // 1. constructor (text, choices, answer, difficulty)
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }
  // 2. shuffleChoices()
  shuffleChoices() {
    for (let i = this.choices.length - 1; i > 0; i--) {
      //return Math.floor(Math.random() * max);
      const shuffle = Math.floor(Math.random() * (i + 1));
      [this.choices[i], this.choices[shuffle]] = [
        this.choices[shuffle],
        this.choices[i],
      ];
    }
    return this.choices;
  }
}
