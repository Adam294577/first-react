import React, { useState, useEffect } from 'react';
const Page = () => {
  const PageBreakPoint = [
    { name: 'start', slide: 1, BreakPoint: 1 },
    { name: 'intro', slide: 2, BreakPoint: 2 },
    { name: 'beforefrontend', slide: 3, BreakPoint: 4 },
    { name: 'work', slide: 4, BreakPoint: 1 },
    { name: 'end', slide: 5, BreakPoint: 1 },
  ];
  const [nowPage, setNowPage] = useState(PageBreakPoint[0]);
  const next = () => setNowPage(getNextPage);
  const getNextPage = (prev) => {
    if (prev.name === 'end') return prev;
    const currentIndex = PageBreakPoint.findIndex((page) => page.name === prev.name);
    const maxBreakPoint = PageBreakPoint[currentIndex].BreakPoint;
    if (prev.BreakPoint < maxBreakPoint) {
      return { ...prev, BreakPoint: prev.BreakPoint + 1 };
    } else {
      return { ...PageBreakPoint[currentIndex + 1], BreakPoint: 1 };
    }
  };
  const back = () => setNowPage(getBackPage);
  const getBackPage = (prev) => {
    if (prev.name === 'start') return prev;
    if (prev.BreakPoint === 1) {
      const currentIndex = PageBreakPoint.findIndex((page) => page.name === prev.name);
      return { ...PageBreakPoint[currentIndex - 1] };
    } else {
      return {
        ...prev,
        BreakPoint: prev.BreakPoint - 1,
      };
    }
  };
  useEffect(() => {
    console.log('nowPage:', nowPage);
  }, [nowPage]);

  const handleKeyDown = (event) => {
    if (event.key === '+') {
      next();
    } else if (event.key === '-') {
      back();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div className='PPTLayout h100vh bg-[#CCC]'>
      <header>PPT 模擬操作</header>
      <div>
        <p>目前投影片：{nowPage.name}</p>
        <p>目前 Slide:{nowPage.slide}</p>
        <p>目前 BreakPoint：{nowPage.BreakPoint}</p>
      </div>
      <footer>
        <button onClick={back}>上一頁 (-)</button>
        <button onClick={next}>下一頁 (+)</button>
      </footer>
    </div>
  );
};
export default Page;
