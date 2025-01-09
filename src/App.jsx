import React, { useEffect, useRef, useState } from 'react';
console.log('init-1');
const testLog = () => {
  console.log('init-3');
};

const App = () => {
  const isMounted = useRef(false); // 使用 useRef 來記錄狀態

  const [count, setCount] = useState(0); // 使用 useState 管理響應式狀態
  const increment = () => {
    setCount((prevCount) => prevCount + 1); // 使用回調，避免同步問題
  };

  useEffect(() => {
    if (!isMounted.current) {
      testLog();
      isMounted.current = true;
    }
  }, []);
  const aim = [
    '了解vite react初始環境',
    '試著寫html內容',
    '引入CSS UI框架',
    '試著寫css變更樣式',
    '試著寫基礎js內容(計數器)',
    '了解react基本的api',
    '了解react的hook',
    '試著切換頁面(仿 vue router)',
    '模擬 restful api 來處理後端資料(使用 tanstack 完成)',
    '完成一個 3 ~ 5分面試履歷自介',
  ];
  return (
    <div>
      <h1>學習目標</h1>
      <ul className='mylist lk'>
        {aim.map((item, index) => (
          <li
            style={{ fontSize: '18px', fontWeight: 600 }}
            className={`bg-[#CCC] ${index % 2 === 1 ? 'c-blue-500' : 'c-gray-500'}`}
            key={index}
          >
            {index}.{item}
          </li>
        ))}
      </ul>

      <div className='count mt10'>
        <h2>計數器</h2>
        <p>{count}</p>
        <button onClick={increment}>增加</button>
      </div>
    </div>
  );
};

export default App;
