// EN: facts.js — the data for the Fact Board.
// 中文:facts.js —— Fact Board 的数据文件。
// EN: Do NOT copy this data into your app. Load this file with a <script> tag
//     in index.html and use the facts variable in your React code.
// 中文:不要把数据拷进自己的代码。用 index.html 里的 <script> 标签加载本文件,
//     然后在 React 代码里使用 facts 变量。
// EN: READ CAREFULLY: the array is facts.items (NOT facts.facts, and NOT facts.riddles).
// 中文:仔细看:数组是 facts.items(不是 facts.facts,也不是 facts.riddles)。

const facts = {
  "items": [
    {
      "id": 1,
      "question": "What does JSX compile into?",
      "answer": "React.createElement() calls.",
      "starred": true
    },
    {
      "id": 2,
      "question": "Which attribute replaces class in JSX?",
      "answer": "className — class is a JavaScript keyword.",
      "starred": false
    },
    {
      "id": 3,
      "question": "What does type=\"text/babel\" tell the browser?",
      "answer": "Let Babel compile this file before running it.",
      "starred": false
    },
    {
      "id": 4,
      "question": "What does ReactDOM.createRoot() do?",
      "answer": "It makes one DOM node React's root.",
      "starred": true
    },
    {
      "id": 5,
      "question": "How does data get into a component?",
      "answer": "Through props, received as one object.",
      "starred": false
    },
    {
      "id": 6,
      "question": "Can a component change its props?",
      "answer": "No. Props are read-only; the parent owns them.",
      "starred": false
    },
    {
      "id": 7,
      "question": "Why use map() instead of a for loop in JSX?",
      "answer": "map() is an expression; for is a statement.",
      "starred": true
    },
    {
      "id": 8,
      "question": "Where does the key prop go?",
      "answer": "On the element returned by map(), using a stable id.",
      "starred": false
    },
    {
      "id": 9,
      "question": "What is a component?",
      "answer": "A function with a capital name that returns elements.",
      "starred": false
    },
    {
      "id": 10,
      "question": "What does { } mean in JSX?",
      "answer": "JavaScript starts here; its result goes into the markup.",
      "starred": false
    },
    {
      "id": 11,
      "question": "Why must a Date object become text?",
      "answer": "Objects are not valid as a React child.",
      "starred": true
    },
    {
      "id": 12,
      "question": "What does new Date().toLocaleDateString() give?",
      "answer": "The date in local format, e.g. 10/28/2026.",
      "starred": false
    }
  ]
};
