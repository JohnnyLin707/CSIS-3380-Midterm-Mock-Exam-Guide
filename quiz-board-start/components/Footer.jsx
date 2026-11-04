// EN: Footer.jsx: the bar fixed to the bottom of the page.
// 中文:Footer.jsx:固定在页面底部的栏。
// EN: TODO: replace "current date" with today's real date.
// 中文:TODO:把 "current date" 换成今天的真实日期。
const Footer = () => {
  const today = new Date().toDateString();   // EN: e.g. "Wed Oct 28 2026"  // 中文:例如 "Wed Oct 28 2026"
  return (
    <footer>
      <p>Generated today: { today }</p>
    </footer>
  );
};
