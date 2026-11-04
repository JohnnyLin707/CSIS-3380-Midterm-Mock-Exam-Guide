// EN: Footer.jsx: the bottom bar.
// 中文:Footer.jsx:底部栏。
// EN: TODO: replace "current date" with today's real date in LOCAL format.
//     Hint: new Date().toLocaleDateString() → "10/28/2026"
// 中文:TODO:把 "current date" 换成本地格式的真实日期。
//     提示:new Date().toLocaleDateString() → "10/28/2026"
const Footer = () => {
  const today = new Date().toLocaleDateString();   // EN: e.g. "10/28/2026"  // 中文:例如 "10/28/2026"
  return (
    <footer>
      <p>Last updated: { today }</p>
    </footer>
  );
};
