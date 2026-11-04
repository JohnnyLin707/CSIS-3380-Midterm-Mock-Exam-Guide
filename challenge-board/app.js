// EN: TASK 2 — App receives the data ONLY through props (Professor's Activity 4 style).
// 中文:任务 2 —— App 只通过 props 接收数据(Professor 活动 4 的写法)。
// EN: Do NOT read the global `tasks` variable inside App; use `props.tasks`.
// 中文:不要在 App 里读全局 `tasks` 变量;要用 `props.tasks`。

// EN: App shows the header, the nine task cards and the footer, in ONE outer div.
// 中文:App 显示标题栏、九张任务卡片和页脚,包在唯一一个外层 div 里。
const App = (props) => {
  // EN: ANSWER 2a — count the finished tasks with filter().length BEFORE the return.
  // 中文:补全点 2a —— 在 return 之前用 filter().length 统计已完成任务数。
  // EN: filter() keeps the items that pass a test; .length counts them (Movie Night Step 15).
  // 中文:filter() 保留通过测试的项,.length 统计数量(Movie Night 第 15 步)。
  const doneCount = props.tasks.filter(task => task.done).length;

  return (
    <div>
      {/* EN: ANSWER 2b — both numbers come from the data, never typed in. */}
      {/* 中文:补全点 2b —— 两个数字都由数据算出,绝不手写死。 */}
      <Header total={ props.tasks.length } doneCount={ doneCount } />

      <div className="board">
        {/* EN: ANSWER 2c — map() builds the list; key uses the stable id from the data. */}
        {/* 中文:补全点 2c —— 用 map() 生成列表;key 用数据里稳定的 id。 */}
        {/* EN: Pass every field as its OWN prop, with spaces inside the braces. */}
        {/* 中文:每个字段单独作为一个 prop 传入,花括号内留空格。 */}
        { props.tasks.map(task =>
          <TaskCard
            key={ task.id }
            id={ task.id }
            title={ task.title }
            topic={ task.topic }
            minutes={ task.minutes }
            done={ task.done }
            priority={ task.priority }
          />
        ) }
      </div>

      <Footer total={ props.tasks.length } doneCount={ doneCount } />
    </div>
  );
};

// EN: ANSWER 2d — the data enters the component tree HERE, as one prop.
// 中文:补全点 2d —— 数据在这里作为 prop 进入组件树。
// EN: This is the line that makes this challenge harder than the three earlier mocks.
// 中文:正是这一行让本题比前三套模拟考更难。
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App tasks={ tasks } />);
