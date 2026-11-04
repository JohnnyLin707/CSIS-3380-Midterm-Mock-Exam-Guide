// EN: app.js: the App component, and the code that puts it on the page.
// 中文:app.js:App 组件,以及把应用放到页面上的代码。
//
// EN: TODO 1: write the App component. It shows <Header />, then a <div className="board">
//             holding one <QuizCard /> per question in questions.js, then <Footer />.
// 中文:TODO 1:编写 App 组件:显示 <Header />、一个 <div className="board">,里面
//             每道题对应一个 <QuizCard />,最后是 <Footer />。
const App = () => {
  return (
    <div>
      <Header />
      <div className="board">
        {/* EN: one <QuizCard /> per question, with a stable key. */}
        {/* 中文:每道题一个 <QuizCard />,并带稳定的 key。 */}
        { questions.questions.map(card =>
          <QuizCard
            key={ card.id }
            id={ card.id }
            question={ card.question }
            answer={ card.answer }
          />
        ) }
      </div>
      <Footer />
    </div>
  );
};

// EN: TODO 2: render <App /> into the <div id="root"> in index.html.
// 中文:TODO 2:把 <App /> 渲染进 index.html 里的 <div id="root">。
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
