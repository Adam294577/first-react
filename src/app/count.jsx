import React, { useState } from 'react';
const Page = () => {
  const [count, setCount] = useState(0); // 使用 useState 管理響應式狀態
  const increment = () => {
    setCount((prevCount) => prevCount + 1); // 使用回調，避免同步問題
  };

  return (
    <div>
      <h1>簡單做個計數器</h1>
      <p>{count}</p>
      <button className='p4 border' onClick={increment}>
        增加
      </button>
    </div>
  );
};

export default Page;
