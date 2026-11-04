// Riddle.jsx: ONE riddle card.
// TODO: this card always shows the same placeholder text.
//       Make it show the riddle it is given (use props).
function Riddle() {
  return (
    <div className="card">
      <span className="card-number">Riddle 1</span>
      <p className="question">Riddle question</p>
      <p className="answer">Riddle answer</p>
    </div>
  );
}
