// EN: Header.jsx: the blue bar. Already finished — do not change this file.
// 中文:Header.jsx:蓝色标题栏。已完成 —— 不要改这个文件。
// EN: It shows the title and a count that comes from props.
// 中文:它显示标题,以及一个由 props 传进来的数量。
// EN: In App you must pass it: <Header count={facts.items.length} />
// 中文:在 App 里必须这样传:<Header count={facts.items.length} />
function Header(props) {
  return (
    <header>
      <h1>Fact Board</h1>
      <p>{props.count} facts. Can you guess them before you read the answer?</p>
    </header>
  );
}
