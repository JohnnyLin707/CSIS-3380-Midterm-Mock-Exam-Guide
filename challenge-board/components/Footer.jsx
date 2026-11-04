// EN: TASK 5 — Footer combines a count from props with TODAY'S REAL DATE.
// 中文:任务 5 —— Footer 要把 props 传来的数量与今天的真实日期合在一起。
// EN: A Date object cannot go into JSX directly; turn it into text first.
// 中文:Date 对象不能直接放进 JSX;必须先转成文本。

// EN: Footer.jsx: the bar fixed to the bottom of the page.
// 中文:Footer.jsx:固定在页面底部的栏。
const Footer = (props) => {
  // EN: ANSWER 5a — ordinary JavaScript goes above the return (Movie Night Step 15).
  // 中文:补全点 5a —— 普通 JavaScript 写在 return 之前(Movie Night 第 15 步)。
  const today = new Date().toDateString();

  return (
    <footer>
      {/* EN: ANSWER 5b — counts from props, date from the Date object. */}
      {/* 中文:补全点 5b —— 数量来自 props,日期来自 Date 对象。 */}
      <p>{ props.doneCount } of { props.total } done · Generated today: { today }</p>
    </footer>
  );
};
