// EN: QuizCard.jsx: ONE question card.
// 中文:QuizCard.jsx:一张题目卡片。
// EN: TODO: this card always shows the same placeholder text. Make it show the
//          question it is given (use props).
// 中文:TODO:这张卡现在只显示占位文字。让它显示传给它的题目(使用 props)。
function QuizCard() {
  return (
    <div className="card">
      <span className="card-number">Question 1</span>
      <p className="question">Quiz question</p>
      <p className="answer">Quiz answer</p>
    </div>
  );
}
