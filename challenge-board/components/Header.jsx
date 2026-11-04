// EN: TASK 3 — Header reads BOTH numbers from props (Professor's Activity 3/4 style).
// 中文:任务 3 —— Header 的两个数字都从 props 读取(Professor 活动 3/4 的写法)。
// EN: The title is typed in, but the counts must come from the parent.
// 中文:标题可以写死,但数量必须由父组件传入。

// EN: Header.jsx: the blue bar at the top of the page.
// 中文:Header.jsx:页面顶部的蓝色标题栏。
const Header = (props) => {
  return (
    <header>
      <h1>Revision Board</h1>
      {/* EN: ANSWER 3a — build the count line from props.total and props.doneCount. */}
      {/* 中文:补全点 3a —— 用 props.total 和 props.doneCount 拼出数量行。 */}
      <p>{ props.total } tasks · { props.doneCount } done</p>
    </header>
  );
};
