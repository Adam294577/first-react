import React, { useState } from 'react';
import { Title } from '@/components/myTitle';
import { BackHomeSvg } from '@/components/backHomeSvg';
const Page = () => {
  const [count, setCount] = useState(0); // 使用 useState 管理響應式狀態
  const increment = () => {
    setCount((prevCount) => prevCount + 1); // 使用回調，避免同步問題
  };

  return (
    <div>
      <Title cont="簡單做個計數器" />
      <div className="p10">
        <p>{count}</p>
        <button className="mt5 p4 border" onClick={increment}>
          增加
        </button>
      </div>
      <BackHomeSvg className="cursor-pointer w10 h10 flex-center fixed bottom-10 left-10" />
    </div>
  );
};

export default Page;
