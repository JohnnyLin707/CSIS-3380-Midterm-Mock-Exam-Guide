// EN: Fact.jsx: ONE fact card.
// 中文:Fact.jsx:一张知识卡片。
// EN: TODO 1: take props and show id, question and answer from separate props.
// 中文:TODO 1:接收 props,从各个单独的 prop 里显示 id、question 和 answer。
// EN: TODO 2: show the STAR badge only when props.starred is true, using &&.
// 中文:TODO 2:仅当 props.starred 为 true 时,用 && 显示 STAR 徽章。
const Fact = (props) => {
  return (
    <div className="card">
      <span className="card-number">Fact { props.id }</span>
      { props.starred && <span className="badge">STAR</span> }
      <p className="question">{ props.question }</p>
      <p className="answer">{ props.answer }</p>
    </div>
  );
};
