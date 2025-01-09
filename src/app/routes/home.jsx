import { useEffect, useRef, useState } from 'react';
import Header from '@/components/header';
const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  return (
    <div>
      <Header title="我是首頁" />

      <div className="count mt10">
        <h2>計數器</h2>
        <p>{count}</p>
        <button onClick={increment}>增加</button>
      </div>
    </div>
  );
};

export default App;
