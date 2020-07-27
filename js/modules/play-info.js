export default function playInfo() {
    console.log("playinfo działa");
}

export default function Question(question, choices, answerKey) {
    this.question = question;
    this.choices = choices;
    this.answerKey = answerKey;
  }
  
  Question.prototype.isCorrect = function (guessKey) {
    return guessKey === this.answerKey;
  }
  
  