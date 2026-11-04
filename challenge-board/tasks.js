// EN: TASK 1 — the data is a TOP-LEVEL ARRAY, not a nested object.
// 中文:任务 1 —— 数据是顶层数组,不是嵌套对象。
// EN: Read it carefully: the array is `tasks` (NOT tasks.tasks, NOT tasks.items).
// 中文:仔细看:数组就是 `tasks`(不是 tasks.tasks,也不是 tasks.items)。
// EN: ANSWER 1 — do NOT copy this data into your React code; this file is loaded
//     by a <script> tag and passed into App at the bottom of app.js.
// 中文:补全点 1 —— 不要把数据拷进 React 代码;本文件由 <script> 标签加载,
//     并在 app.js 末尾传给 App。

const tasks = [
  { id: 1, title: "Add React CDN scripts", topic: "HTML setup", minutes: 10, done: true, priority: "high" },
  { id: 2, title: "Create the root element", topic: "HTML setup", minutes: 5, done: true, priority: "normal" },
  { id: 3, title: "Write JSX with Babel", topic: "JSX", minutes: 15, done: false, priority: "high" },
  { id: 4, title: "Use { } expressions", topic: "JSX", minutes: 10, done: true, priority: "normal" },
  { id: 5, title: "Build a function component", topic: "Components", minutes: 15, done: false, priority: "high" },
  { id: 6, title: "Pass props to a child", topic: "Props", minutes: 10, done: false, priority: "normal" },
  { id: 7, title: "Render a list with map()", topic: "Lists", minutes: 15, done: false, priority: "high" },
  { id: 8, title: "Give each item a key", topic: "Lists", minutes: 5, done: false, priority: "normal" },
  { id: 9, title: "Show today's real date", topic: "Footer", minutes: 5, done: false, priority: "normal" }
];
