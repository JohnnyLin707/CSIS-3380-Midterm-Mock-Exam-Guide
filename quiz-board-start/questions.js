// EN: questions.js — the data for the Quiz Board.
// 中文:questions.js —— Quiz Board 的数据文件。
// EN: Do NOT copy this data into your app. Load this file with a <script> tag
//     in index.html and use the questions variable in your React code.
// 中文:不要把数据拷进自己的代码。用 index.html 里的 <script> 标签加载本文件,
//     然后在 React 代码中使用 questions 变量。
// EN: The array of nine questions is questions.questions (the name appears twice).
// 中文:九道题的数组是 questions.questions(名字出现了两次)。

const questions = {
  "questions": [
    {
      "id": 1,
      "question": "What does React.createElement() return?",
      "answer": "A React element: a plain object that describes a DOM node, not the node itself."
    },
    {
      "id": 2,
      "question": "Which two libraries do you load from a CDN for React 18?",
      "answer": "react (the core) and react-dom (the web renderer)."
    },
    {
      "id": 3,
      "question": "Why does a JSX file need type=\"text/babel\"?",
      "answer": "JSX is not valid JavaScript; Babel compiles it into createElement() calls first."
    },
    {
      "id": 4,
      "question": "In JSX, how do you write the class attribute?",
      "answer": "className — class is a JavaScript keyword."
    },
    {
      "id": 5,
      "question": "How does data get into a component?",
      "answer": "Through props: the parent writes them like attributes; the child receives one object named props."
    },
    {
      "id": 6,
      "question": "Why can't you put a for loop inside JSX?",
      "answer": "for is a statement; JSX accepts expressions only — use map()."
    },
    {
      "id": 7,
      "question": "Where does the key prop go?",
      "answer": "On the element returned by map(), using a stable id from the data."
    },
    {
      "id": 8,
      "question": "Which two lines render a React 18 app?",
      "answer": "ReactDOM.createRoot(document.getElementById('root')) then root.render(<App />)."
    },
    {
      "id": 9,
      "question": "Why can't a Date object go straight into { }?",
      "answer": "Objects are not valid React children; turn it into text, e.g. toDateString()."
    }
  ]
};
