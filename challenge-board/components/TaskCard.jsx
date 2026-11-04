// EN: TASK 4 — ONE card, with two kinds of conditional rendering.
// 中文:任务 4 —— 一张卡片,含两种条件渲染。
// EN: Use && for the badge that is either there or not, and ? : for the badge
//     that has two versions (Movie Night Steps 05/14; Activity 4's Movie component).
// 中文:"有或没有"的徽章用 &&,"有两个版本"的徽章用 ? :
//     (Movie Night 第 05/14 步;活动 4 的 Movie 组件)。

// EN: TaskCard.jsx: ONE task card. Six separate props come from App.
// 中文:TaskCard.jsx:一张任务卡片。App 传入六个单独的 prop。
const TaskCard = (props) => {
  return (
    <div className="card">
      {/* EN: ANSWER 4a — the number comes from props.id, not typed in. */}
      {/* 中文:补全点 4a —— 编号来自 props.id,不是手写死的。 */}
      <span className="card-number">Task { props.id }</span>

      {/* EN: ANSWER 4b — && shows DONE only when props.done is true. */}
      {/* 中文:补全点 4b —— && 仅在 props.done 为 true 时显示 DONE 徽章。 */}
      { props.done && <span className="badge badge-done">DONE</span> }

      <p className="question">{ props.title }</p>
      <p className="meta">{ props.topic } · { props.minutes } min</p>

      {/* EN: ANSWER 4c — ? : picks one of two badges; an if statement cannot go here. */}
      {/* 中文:补全点 4c —— ? : 二选一显示徽章;这里不能用 if 语句。 */}
      { props.priority === "high"
          ? <span className="badge badge-high">HIGH</span>
          : <span className="badge badge-normal">NORMAL</span> }

      {/* EN: ANSWER 4d — the answer line stays empty on purpose: it is a study checklist. */}
      {/* 中文:补全点 4d —— 答案行故意留空:这是一张复习清单卡片。 */}
      <p className="answer">{ props.done ? "Reviewed." : "Still to review." }</p>
    </div>
  );
};
